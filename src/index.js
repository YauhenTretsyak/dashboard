import React from 'react'
import ReactDOM from 'react-dom/client'
import {store} from './store/store'
import {Provider} from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from '@mui/material/styles'
import App from './App'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
