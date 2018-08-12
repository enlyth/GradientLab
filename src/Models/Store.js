import { types } from 'mobx-state-tree'
import Gradient from './Gradient'
import { RouterModel } from 'mst-react-router'

const defaultCode = `const selected = store.selectedGradient
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
      const gradient = self.gradients[self.selected]
      return !gradient ? null : gradient
    }
  }))
  .actions(self => ({
    selectGradient: index => {
      self.selected = index
    },
    hideUI: () => {
      console.log('hideUI')
      self.uiHidden = true
    },
    showUI: () => {
      console.log('showUI')
      if (self.router.location.pathname === '/') {
        self.uiHidden = false
      }
    },
    toggleUILock: () => {
      console.log('toggleUILock')
      self.uiHiddenLocked = !self.uiHiddenLocked
    },
    lockUIHidden: () => {
      self.uiHiddenLocked = true
      console.log('lockUIHidden')
    },
    unlockUIHidden: () => {
      self.uiHiddenLocked = false
      console.log('unlockUIHidden')
    },
    setOutputCode: code => {
      console.log('setOutputCode')
      self.outputCode = code
    }
  }))

export default Store
