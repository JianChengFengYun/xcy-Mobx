import * as React from 'react'
import { observer } from 'mobx-react'
import * as styles from './style.styl'
import { testStore } from '@/models/demo.4'
import { Link } from 'react-router-dom'

@observer
export default class App extends React.Component {
  getDataList = () => {
    let t = [{
      id: 1,
      text: 'test2',
      type: 0
    },
    {
      id: 2,
      text: 'test3',
      type: 0
    }]
    let promise = new Promise(function (resolve) {
      resolve(t)
    })
    promise.then(function (value) {
      console.log(value)
      testStore.cb(value)
    })
  }
  render() {
    let item = testStore.list.map((li, i) => {
      return <li key={li.id}>{li.text}</li>
    })
    return (
      <div className={styles['m1']}>
        <h3>list</h3>
        <ul>
          {item}
        </ul>
        <button onClick={this.getDataList}> 加载更多 </button>
      <br/>
      <Link to ='./'> to demo2 </Link>
      </div>
    )
  }
}
