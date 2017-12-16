import * as React from 'react'
import  M1 from './M1'
import  M2 from './M2'
import './style'

export default class App extends React.Component {
  render() {
    return (
      <div className='demo1'>
        第一个mobx demo
        <M1 />
        <M2 />
      </div>
    )
  }
}
