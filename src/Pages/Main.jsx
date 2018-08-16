import React from 'react'
import chroma from 'chroma-js'
import posed from 'react-pose'
import ColorCube from '../Components/ColorCube'
import ColorPickers from '../Components/ColorPickers'
import GradientSelection from '../Components/GradientSelection'
import CodeOutput from '../Components/CodeOutput'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { toast } from 'react-toastify'
import { MdContentCopy } from 'react-icons/md'
import { observer } from 'mobx-react'

export const AnimatedGroup = posed.div({
  visible: { delayChildren: 100, staggerChildren: 150 }
})

export const AnimatedDiv = posed.div({
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 32 }
})

class Main extends React.Component {
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
            <CopyToClipboard
              className="copy-button"
              text={backgroundStyle.background}
              onCopy={() =>
                toast('Copied to clipboard!', { position: 'bottom-right' })
              }
            >
              <button>
                <MdContentCopy /> Copy to clipboard
              </button>
            </CopyToClipboard>
          </AnimatedDiv>
          <AnimatedDiv>
            <GradientSelection store={store} selected={selected} />
          </AnimatedDiv>
        </AnimatedGroup>
      </div>
    )
  }
}

export default observer(Main)
