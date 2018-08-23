import React from 'react'
import chroma from 'chroma-js'
import evaluate from '../Utility/evaluate'

const CodeOutput = ({ store }) => (
  <div className="codeBlock">
    <code style={{ wordBreak: 'break-all' }}>
      {' '}
      {evaluate(store, chroma)}
    </code>
  </div>
)

export default CodeOutput
