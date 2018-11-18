import React from 'react'
import blessed from 'neo-blessed'
import { createBlessedRenderer } from 'react-blessed'
import App from './App'

const render = createBlessedRenderer(blessed)

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'React Blessed Demo'
})

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
  return process.exit(0)
})

render(<App />, screen)
