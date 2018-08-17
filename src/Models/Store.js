import { types, applySnapshot } from 'mobx-state-tree'
import Gradient from './Gradient'
import { RouterModel } from 'mst-react-router'
import defaultStore from '../defaultStore'

export const defaultCode = `const selected = store.selectedGradient
const linearGradient = chroma
  .scale(selected.colors)
  .mode(selected.mode)
  .colors(selected.grades)

const deg = selected.degrees.length === 0 ? '160' : selected.degrees
const backgroundStyle = 'linear-gradient(' +
  deg + 'deg,' + linearGradient.toString() + ');'
return backgroundStyle`

const Store = types
  .model('Store', {
    selected: types.optional(types.number, 0),
    gradients: types.array(Gradient),
    uiHidden: types.optional(types.boolean, true),
    uiHiddenLocked: types.optional(types.boolean, false),
    router: RouterModel,
    outputCode: types.optional(types.string, defaultCode)
  })
  .views(self => ({
    get selectedGradient () {
      if (self.selected >= self.gradients.length) {
        return self.gradients[self.gradients.length - 1]
      } else {
        return self.gradients[self.selected]
      }
    }
  }))
  .actions(self => ({
    selectGradient: index => {
      self.selected = index
    },
    reset: () => {
      const snapShot = JSON.parse(
        window.localStorage.getItem('__GRADIENTLAB_STORE__')
      )
      Object.assign(snapShot, {...defaultStore, uiHidden: true, uiHiddenLocked: true})
      applySnapshot(self, snapShot)
    },
    addGradient: () => {
      self.gradients.push({
        colors: ['#ffffff', '#000000'],
        grades: 2,
        mode: 'lch'
      })
    },
    deleteSelectedGradient: () => {
      self.gradients.length > 1 && self.gradients.splice(self.selected, 1)
    },
    hideUI: () => {
      self.uiHidden = true
    },
    showUI: () => {
      if (self.router.location.pathname === '/') {
        self.uiHidden = false
      }
    },
    toggleUILock: () => {
      self.uiHiddenLocked = !self.uiHiddenLocked
    },
    lockUIHidden: () => {
      self.uiHiddenLocked = true
    },
    unlockUIHidden: () => {
      self.uiHiddenLocked = false
    },
    setOutputCode: code => {
      self.outputCode = code
    }
  }))

export default Store
