import { observable, useStrict, action } from 'mobx'

useStrict(true)
class MyState {
    @observable num = 0
    @action addNum = () => {
        this.num++
    }
    @action init = () => {
        this.num = 777
    }
    @action ajax = (data) => {
        this.num = data
    }
}
export const newState = new MyState()
