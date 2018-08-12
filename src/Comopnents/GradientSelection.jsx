import React from 'react'
import SavedGradient from './SavedGradient'

export default ({store, selected}) => {
  return (
    <div className="savedGradients" style={{ display: 'inline-block' }}>
      {store.gradients.map((key, index) => (
        <SavedGradient
          isSelected={selected === key}
          onClickHandler={() => store.selectGradient(index)}
          gradient={key}
          key={index}
        />
      ))}
    </div>
  )
}
