import React from 'react'
import { create } from 'dva-core'
import { Provider, connect } from 'react-redux'

export { connect }

export default function (opts) {
  const app = create(opts)
  app.start()
  app.start = container => () => (
    <Provider store={app._store}>
      {container}
    </Provider>
  )

  return app
}
