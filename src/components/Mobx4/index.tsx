import * as React from 'react'
import { observer } from 'mobx-react'
// import * as styles from './style.styl'
import { store } from '@/models/demo.3.ts'
import { Link } from 'react-router-dom'


@observer
export default class extends React.Component {

  creatNew(e) {
    if (e.which === 13) {
      store.creatTodo(e.target.value)
      e.target.value = ''
    }
  }

  filter(e) {
    store.filter = e.target.value
  }

  toggleComplete(todo) {
    todo.complete = !todo.complete
  }

  render() {
    let { todos, fikteredTodos, filter, clearComplete } = store

    const todolist1 = todos.map(todo => (
      <li>{todo}</li>
    ))
    const todolist2 = fikteredTodos.map(todo => (
      <li key={todo.id}>
        <input type='checkbox' onChange={this.toggleComplete.bind(this, todo)} value={todo.complete} checked={todo.complete} />
        {todo.value}
      </li>
    ))

    return <div>
      <h1>todos</h1>
      {/* <div>{filter}</div> */}
      <input type='text' placeholder='回车添加列表' onKeyPress={this.creatNew.bind(this)} />
      <input type='text' placeholder='filter' value={filter} onChange={this.filter.bind(this)} />
      {/* <ul>{todolist1}</ul> */}
      <br />
      <ul>{todolist2}</ul>
      <span onClick={clearComplete}> clear complete</span>
      <br/>
      <Link to ='./demo5'> to demo5 </Link>
    </div>
  }
}

