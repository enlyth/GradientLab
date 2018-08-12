import React from 'react'
import chroma from 'chroma-js'

export default ({ store }) => {
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

  return (
    <div className="codeBlock">
      <code style={{wordBreak: 'break-all'}}>
        {' '}
        {(() => {
          try {
            const result = eval(
              '((chroma, store) => {' + store.outputCode + '})'
            )(chroma, store).toString()
            return result
          } catch (err) {
            return err.toString()
          }
        })()}
      </code>
    </div>
  )
}
