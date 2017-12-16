import { observable, useStrict, action, computed, autorun } from 'mobx'

export class Todo {
  id = Math.random()
  @observable title: string
  constructor(tit: string) {
    this.title = tit
  }
  @observable finished = false
}



// useStrict(true)
class TodoList {
  @observable todos = []
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length
  }
}
export const store = new TodoList()

autorun(function () {
  console.log('Completed %d of %d items',
    store.unfinishedTodoCount,
    store.todos.length
  )
})

store.todos.push(
  new Todo('Get Coffee'),
  new Todo('Write simpler code')
)
store.todos[0].finished = true
