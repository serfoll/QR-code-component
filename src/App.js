//libraries
import { createRoot } from 'react-dom/client'
import React from 'react'

//Style components
import BaseStyle from './style/base'
import Pages from './pages'

//DOM el
const container = document.getElementById('root')
const root = createRoot(container)

const App = () => {
  return (
    <React.Fragment>
      <BaseStyle />
      <Pages />
    </React.Fragment>
  )
}

root.render(<App />)
