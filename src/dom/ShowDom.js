import React, { useState } from 'react'

import { withDemo } from '../shared/context'

const ShowDom = ({ demo, setDemo }) => {
  const [ hookTest, setHookTest ] = useState(0)
  return (
    <div>
      <p>
        This shows a simple couter-state, implemented in context & a hook.
      </p>
      <div>
        context: {demo}
        <button onClick={e => setDemo(demo - 1)}>-</button>
        <button onClick={e => setDemo(demo + 1)}>+</button>
      </div>
      <div>
        hook: {hookTest}
        <button onClick={e => setHookTest(hookTest - 1)}>-</button>
        <button onClick={e => setHookTest(hookTest + 1)}>+</button>
      </div>
    </div>
  )
}

export default withDemo(ShowDom)
