import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/routes'
import store from './store/store'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  ReactDOM.render(<Routes store={store}/>, root)
})
