import * as React from 'react'
import { observer } from 'mobx-react'
import * as styles from './style.styl'
import { newState } from '@/models/demo.ts'

@observer
export default class App extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      newState.init()
    }, 4000)
  }
  render() {
    return (
      <div className={styles['m2']}>
      render2
        <p>{newState.num}</p>
        <button className='btn-add' onClick={newState.addNum}>点我+1</button>
      </div>
    )
  }
}
