import React from 'react'
import DegreeInput from './DegreeInput'
import { MdLibraryAdd, MdIndeterminateCheckBox } from 'react-icons/md'

const ButtonControls = ({ store, gradient }) => {
  return (
    <div>
      <button
        onPointerUp={() => gradient.setMode('lch')}
        className={gradient.mode === 'lch' ? 'activeButton' : ''}
      >
        LCH
      </button>
      <button
        onPointerUp={() => gradient.setMode('lab')}
        className={gradient.mode === 'lab' ? 'activeButton' : ''}
      >
        LAB
      </button>
      <button onPointerUp={gradient.removeGrade}>
        <MdIndeterminateCheckBox />
      </button>
      <button onPointerUp={gradient.addGrade}>
        <MdLibraryAdd />
      </button>
      <button onPointerUp={gradient.addColor}>Add Color</button>
      <button onPointerUp={gradient.removeColor}>Remove Color</button>
      <DegreeInput store={store} />
    </div>
  )
}

export default ButtonControls
