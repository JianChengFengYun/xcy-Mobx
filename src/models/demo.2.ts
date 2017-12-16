import { observable, useStrict, action, computed, autorun } from 'mobx'

// useStrict(true)
class TodoList {
  @observable todos = ['hello milk', 'get milk']
  @observable filter = ''
}


export const store = new TodoList()

autorun(function () {
  console.log(store.todos[0])
  console.log(`filters: ${store.filter}`)
})

