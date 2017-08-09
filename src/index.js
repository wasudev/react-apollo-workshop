import React from 'react'
import ReactDOM from 'react-dom'
import { 
  ApolloClient, 
  createNetworkInterface,
  ApolloProvider
} from 'react-apollo'

import routes from './routes'

const networkInterface = createNetworkInterface({ 
  uri: 'https://api.graph.cool/simple/v1/cj57mktdeuv3b0118yimnc16w' 
})

const client = new ApolloClient({
  networkInterface,
})

ReactDOM.render(
  <ApolloProvider  client={client}>
    { routes() }
  </ApolloProvider>, 
  document.getElementById('root'))
