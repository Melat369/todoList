import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3020/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
const app= creteApp({
    setup(){
        provide(DefaultAppolloClient, apolloClient)
    }
    ,render:() => h(App)
}) 

createApp(App).mount('#app')
