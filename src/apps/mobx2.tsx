/**
 * 程序的入口
 */
import '@/common/main.less'
import '@/vendors'
import * as  React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

//解决移动端300毫秒延迟
import * as  fastClick from 'fastclick'
fastClick.attach(document.body)

import Mobx from '@/routes/Mobx2'
const rootEl = document.getElementById('root')

//history
import createHistory from 'history/createHashHistory'
const history = createHistory()

render(
  <AppContainer>
    <Mobx history={history} />
  </AppContainer>
  , rootEl
)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('@/routes/Mobx2', () => {
    const NextApp = require<{ default: typeof Mobx }>('@/routes/Mobx2').default
    render(
      <AppContainer>
        <NextApp history={history} />
      </AppContainer>
      ,
      rootEl
    )
  })
}
