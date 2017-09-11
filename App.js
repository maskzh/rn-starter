import React from 'react'
import { AsyncStorage } from 'react-native'
import { persistStore, autoRehydrate } from 'redux-persist'

import dva from './utils/dva'
import RootNavigation from './navigation/Root'

import appModel from './models/app'
import navModel from './models/nav'

const app = dva({
  extraEnhancers: [autoRehydrate()],
})
app.model(navModel)
app.model(appModel)

export default app.start(<RootNavigation />)
// persistStore(app._store, { storage: AsyncStorage })
