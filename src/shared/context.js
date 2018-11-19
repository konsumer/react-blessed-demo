import React, { Component, createContext } from 'react'

export const DemoContext = createContext()
export const { Provider, Consumer } = DemoContext

// app-level provider of demo context
export class DemoProvider extends Component {
  constructor (props) {
    super(props)
    this.state = {
      demo: 0
    }
    this.setDemo = this.setDemo.bind(this)
  }

  setDemo (value) {
    this.setState({ ...this.state, demo: value })
  }

  render () {
    return (
      <Provider value={{ demo: this.state.demo, setDemo: this.setDemo }}>{this.props.children}</Provider>
    )
  }
}

// wrap a component with demo context consumer
export const withDemo = Component => props => (
  <Consumer>{(context) => (<Component {...props} {...context} />)}</Consumer>
)
