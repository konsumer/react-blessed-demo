import React, { useState } from 'react'

import { withDemo } from '../shared/context'

const ShowBlessed = ({ demo, setDemo }) => {
  const [ hookTest, setHookTest ] = useState(0)
  return (
    <box top='center'
      left='center'
      width='50%'
      height='50%'
      border={{ type: 'line' }}
      style={{ border: { fg: 'blue' } }}>
      This shows a simple couter-state, implemented in context & a hook.

      <box top={3}>
        context:
        <box left={10}>{demo}</box>
        <button left={12} onClick={e => setDemo(demo - 1)}>-</button>
        <button left={13} onClick={e => setDemo(demo + 1)}>+</button>
      </box>

      <box top={4}>
        hook:
        <box left={10}>{hookTest}</box>
        <button left={12} onClick={e => setHookTest(hookTest - 1)}>-</button>
        <button left={13} onClick={e => setHookTest(hookTest + 1)}>+</button>
      </box>
    </box>
  )
}

export default withDemo(ShowBlessed)
