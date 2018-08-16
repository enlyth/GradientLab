import React from 'react'

export default ({gradient}) => {
  return (
    <form>
      <label>
        <input
          type="number"
          value={gradient.degrees}
          onChange={event => gradient.changeDegrees(event.target.value)}
          name="name"
        />
      </label>
    </form>
  )
}
