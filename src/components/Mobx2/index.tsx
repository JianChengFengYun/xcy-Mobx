import * as React from 'react'
import { observer } from 'mobx-react'
import * as styles from './style.styl'
import { store, Todo } from '@/models/demo.1.ts'
import TodoView from './Item'
import { Link } from 'react-router-dom'

@observer
export default class TodoListView extends React.Component {

  componentDidMount() {
    /* store.todos.push(
      new Todo('Get Coffee'),
      new Todo('Write simpler code')
    )
    store.todos[0].finished = true */
  }

  render() {
    // console.log(store.todos[0] && store.todos[0].finished)
    return <div>
      <ul>
        {store.todos.map(todo =>
          <TodoView todo={todo} key={todo.id} />
        )}
      </ul>
      Tasks left: {store.unfinishedTodoCount}
      <br/>
      <Link to ='./demo4'> to demo4 </Link>
    </div>
  }
}


