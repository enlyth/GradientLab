import React from 'react'
import ButtonControls from './ButtonControls'
import posed from 'react-pose'

const AnimatedHeader = posed.div({
  visible: { opacity: 1, top: 0, delay: 150 },
  hidden: { opacity: 1, top: -102 }
})

export default ({ store }) => {
  const visibility =
    store.uiHidden || store.uiHiddenLocked ? 'hidden' : 'visible'

  return (
    <AnimatedHeader pose={visibility} className="controls">
      <div className="ControlsRight" />

      <div className="ControlsMiddle">
        <ButtonControls store={store} gradient={store.selectedGradient} />
      </div>
    </AnimatedHeader>
  )
}
