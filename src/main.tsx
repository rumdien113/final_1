import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import ModuleRoutes from './modules/module.routes'
// import { store, persistor } from './redux/authStore.redux'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
        <ModuleRoutes />
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>,
)
