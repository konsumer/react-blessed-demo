import React from 'react'
import { render } from 'react-dom'

import { DemoProvider } from '../shared/context'
import ShowDom from './ShowDom'

render(<DemoProvider><ShowDom /></DemoProvider>, document.getElementById('root'))
