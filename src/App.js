//libraries
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { setContext } from 'apollo-link-context'

//Style components
import BaseStyle from './style/base'
import Pages from './pages'

//API configuration
const cache = new InMemoryCache()
const uri = process.env.API_URI
const httpLink = createHttpLink({ uri })

//check and load token if it exists
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: localStorage.getItem('token') || null
    }
  }
})

//Apollo Client
const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  resolvers: {}
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
