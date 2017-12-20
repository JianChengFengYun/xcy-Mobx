import { observable, useStrict, action, computed, autorun } from 'mobx'

// useStrict(true)
class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value) {
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}
class TodoList {
  @observable todos = []
  @observable filter = ''
  @computed get fikteredTodos() {
    let matchesFilter = new RegExp(this.filter, 'i')
    return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value))
  }
  creatTodo(value) {
    this.todos.push(new Todo(value))
  }
  clearComplete = () => {
    this.todos = this.todos.filter(todo => !todo.complete)
  }
}
export const store = new TodoList()


