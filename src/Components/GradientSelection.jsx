import React from 'react'
import SavedGradient from './SavedGradient'
import { MdAdd, MdDelete } from 'react-icons/md'
import { observer } from 'mobx-react'

const GradientSelection = ({ store }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <div className="savedGradients">
        {store.gradients.map((key, index) => (
          <SavedGradient
            isSelected={store.selected === index}
            onClickHandler={() => store.selectGradient(index)}
            gradient={key}
            key={index}
          />
        ))}
      </div>
      <button className="saved-gradients-button" onPointerUp={store.addGradient}>
        <MdAdd />
      </button>
      <button className="saved-gradients-button" onPointerUp={store.deleteSelectedGradient}>
        <MdDelete />
      </button>
    </div>
  )
}

export default observer(GradientSelection)
