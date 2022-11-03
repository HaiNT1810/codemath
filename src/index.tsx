import React from 'react'
import ReactDOM from 'react-dom'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'
import * as _redux from './setup'
import store, {persistor} from './setup/redux/Store'
// Apps
import {App} from './app/App'
import {MetronicI18nProvider} from './_metronic/i18n/Metronici18n'
import 'antd/dist/antd.css'
import 'react-toastify/dist/ReactToastify.css'

import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/style.react.scss'
/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {PUBLIC_URL} = process.env
// _redux.setupAxios(axios, store)

ReactDOM.render(
  <MetronicI18nProvider>
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor} loading={<div></div>}>
        <App basename={PUBLIC_URL} />
      </PersistGate>
    </Provider>
  </MetronicI18nProvider>,
  document.getElementById('root')
)
