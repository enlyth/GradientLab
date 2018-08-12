import React from 'react'
import DegreeInput from './DegreeInput'
import { MdLibraryAdd, MdIndeterminateCheckBox } from 'react-icons/md'
import { spring } from 'popmotion'
import posed from 'react-pose'

export default ({ store, gradient }) => {
  const AnimatedSpring = posed.div({
    draggable: true,
    dragEnd: {
      transition: spring
    }
  })
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
      <DegreeInput gradient={gradient} />
      <AnimatedSpring
        style={{
          width: 0,
          height: 0,
          borderRadius: '50%',
          backgroundColor: '#4065df',
          zIndex: 1200,
          margin: 0,
          padding: 0,
          display: 'inline-block'
        }}

      />
    </div>
  )
}
