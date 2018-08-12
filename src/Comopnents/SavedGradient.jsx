import React from 'react'
import chroma from 'chroma-js'

const SavedGradient = ({ gradient, isSelected, onClickHandler, color }) => {
  const linearGradient = chroma
    .scale(gradient.colors)
    .mode(gradient.mode)
    .colors(gradient.grades)

  return (
    <div
      className={'savedGradientCube' + (isSelected === true ? ' selected' : '')}
      onClick={onClickHandler}
      onDragStart={() => console.log('dragStart')}
      onDrop={() => console.log('drop')}
      onDrag={() => console.log('drag')}
      onDragEnd={() => console.log('dragEnd')}
      style={{
        backgroundColor: color,
        width: '.75em',
        height: '.75em',
        padding: '1em',
        margin: '.4em',
        display: 'inline-block',
        background: `linear-gradient(${
          gradient.degrees.length === 0 ? '160' : gradient.degrees
        }deg,${linearGradient.toString()})`
      }}
    />
  )
}

export default SavedGradient
