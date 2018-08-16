import React from 'react'
import { observer } from 'mobx-react'

const DegreeInput = ({store}) => {
  return (
    <form>
      <label>
        <input
          type="number"
          value={store.selectedGradient.degrees}
          onChange={event => store.selectedGradient.changeDegrees(event.target.value)}
          name="name"
        />
      </label>
    </form>
  )
}

export default observer(DegreeInput)
