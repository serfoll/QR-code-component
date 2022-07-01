import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import Home from './home'
import QrCurl from './qrcurl'

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="qrcurl" element={<QrCurl />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Pages
