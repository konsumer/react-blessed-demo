import React from 'react'
import blessed from 'blessed'
import { render } from 'react-blessed'

import { DemoProvider } from '../shared/context'
import ShowBlessed from './ShowBlessed'

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'Blessed Test'
})

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0)
})

render(<DemoProvider><ShowBlessed /></DemoProvider>, screen)
