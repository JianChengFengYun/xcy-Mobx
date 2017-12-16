import * as React from 'react'
import { observer } from 'mobx-react'
// import * as styles from './style.styl'
import { store } from '@/models/demo.2.ts'


@observer
export default class TodoView extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      store.todos[0] = 'milk'
    }, 3000)
  }
  render() {
    return <div>
      {store.todos[0]}
    </div>
  }
}

