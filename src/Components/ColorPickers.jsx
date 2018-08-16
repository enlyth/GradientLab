import React from 'react'
import { SketchPicker } from 'react-color'

const ColorPickers = ({ gradient, store }) =>
  gradient.colors.map((color, index) => (
    <div
      key={index}
      style={{ display: 'inline-block' }}
      pose={(store.uiHidden || store.uiHiddenLocked) ? 'hidden' : 'visible'}
    >
      <SketchPicker
        color={color}
        onChange={color => gradient.changeColor(color.hex, index)}
        disableAlpha
        presetColors={[]}
      />
    </div>
  ))

export default ColorPickers
