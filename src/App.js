//libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createRoot } from 'react-dom/client'
import React from 'react'

//Style components
import BaseStyle from './style/base'
import Pages from './pages'

const uri = process.env.API_URI
const cache = new InMemoryCache()

//Apollo Client
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
})

//DOM el
const container = document.getElementById('root')
const root = createRoot(container)

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BaseStyle />
      <Pages />
    </ApolloProvider>
  )
}

root.render(<App />)
