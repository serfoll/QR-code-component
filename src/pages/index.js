import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//pages
import Home from './home'
import Feed from './feed'
import NotFound from './notFound'
import SingleQrCurl from './singleQrcurl'

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path=":shortCode" element={<SingleQrCurl />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Pages
