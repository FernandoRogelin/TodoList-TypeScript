import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from 'styles/global'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
