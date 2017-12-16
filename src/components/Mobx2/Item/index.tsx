import * as React from 'react'
import { observer } from 'mobx-react'
// import * as styles from './style.styl'
// import { store} from '@/models/demo.1.ts'

interface Props {
  todo?: any
}
@observer
export default class TodoView extends React.Component<Props> {
  render() {
    let { todo } = this.props
    return <li>
      <input
        type='checkbox'
        checked={todo.finished}
        onChange={() => todo.finished = !todo.finished}
      />{todo.title}
    </li>
  }
}

