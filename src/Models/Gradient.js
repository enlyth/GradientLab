import { types } from 'mobx-state-tree'
import chroma from 'chroma-js'

const Gradient = types
  .model('Gradient', {
    colors: types.array(types.string),
    grades: 8,
    degrees: 160,
    mode: types.string
  })
  .actions(self => ({
    addGrade: () => ++self.grades,
    removeGrade: () => self.grades > 2 && self.colors.length <= self.grades && --self.grades,
    addColor: () => self.colors.push(chroma.random().hex()),
    removeColor: () => self.colors.length > 2 && self.colors.pop(),
    changeColor: (color, index) => (self.colors[index] = color),
    setMode: mode => (self.mode = mode),
    changeDegrees: deg => (self.degrees = parseInt(deg, 10))
  }))

export default Gradient
