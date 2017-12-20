/**
 * 路由页面
 */

import * as React from 'react'
import { Route, Router, Switch } from 'react-router-dom'

import TodoListView from '@/components/Mobx2'
import TodoListView3 from '@/components/Mobx3'
import TodoListView4 from '@/components/Mobx4'
import TodoListView5 from '@/components/Mobx5'

interface Props {
  history: any
}
export default class extends React.Component<Props, {}> {

  componentWillMount() {
  }
  render() {
    return (
      <Router history={this.props.history}>
        <Route render={({ location }) => {
          return (
            <Switch>
              <Route component={TodoListView}
                exact
                path='/'
              />
              <Route component={TodoListView3}
                exact
                path='/demo3'
              />
              <Route component={TodoListView4}
                exact
                path='/demo4'
              />
              <Route component={TodoListView5}
                exact
                path='/demo5'
              />
            </Switch>
          )
        }}
        />
      </Router>
    )
  }
}
