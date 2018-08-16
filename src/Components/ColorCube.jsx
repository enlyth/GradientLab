import React from 'react'

export default props => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: '.3em',
        height: '.3em',
        padding: '1em',
        margin: 'auto',
        display: 'inline-block'
      }}
    />
  )
}
