import { observable, useStrict, action } from 'mobx'

// useStrict(true)
class TestStore {
  @observable list = [{
    id: 0,
    text: 'test1',
    type: 0
  }]
  @action cb = (data) => {

    this.list = [...this.list, ...data]
  }
}
export const testStore = new TestStore()
