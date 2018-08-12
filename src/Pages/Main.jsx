import React, { Component } from 'react'
import chroma from 'chroma-js'
import posed from 'react-pose'
import ColorCube from '../Comopnents/ColorCube'
import ColorPickers from '../Comopnents/ColorPickers'
import GradientSelection from '../Comopnents/GradientSelection'
import CodeOutput from '../Comopnents/CodeOutput'

export const AnimatedGroup = posed.div({
  visible: { y: '0%', delayChildren: 100, staggerChildren: 150 },
  hidden: { y: '10%' }
})

export const AnimatedDiv = posed.div({
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 32 }
})

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    this.props.store.showUI()
    this.props.store.unlockUIHidden()
  }
  render() {
    const store = this.props.store
    const selected = store.selectedGradient
    const linearGradient = chroma
      .scale(selected.colors)
      .mode(selected.mode)
      .colors(selected.grades)

    const backgroundStyle = {
      background: `linear-gradient(${
        selected.degrees.length === 0 ? '160' : selected.degrees
      }deg,${linearGradient.toString()})`,
      width: '100%'
    }

    const visibility =
      store.uiHidden || store.uiHiddenLocked ? 'hidden' : 'visible'

    return (
      <div id="contentBlock" style={backgroundStyle}>
        <AnimatedGroup pose={visibility}>
          <AnimatedDiv
            pose={visibility}
            className="colorBlocks"
            style={{ display: 'inline-block' }}
          >
            {linearGradient.map((c, idx) => <ColorCube color={c} key={idx} />)}
          </AnimatedDiv>
          <AnimatedDiv pose={visibility}>
            <ColorPickers store={store} gradient={selected} />
          </AnimatedDiv>
          <AnimatedDiv pose={visibility}>
            <CodeOutput store={store} />
          </AnimatedDiv>
          <AnimatedDiv>
            <GradientSelection store={store} selected={selected} />
          </AnimatedDiv>
        </AnimatedGroup>
      </div>
    )
  }
}
