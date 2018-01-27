import React from 'react'
import Relay from 'react-relay'
import ReactDOM from 'react-dom'
import PokemonPage from './views/PokemonPage'
import ListPage from './views/ListPage'
import { Router, Route, browserHistory, applyRouterMiddleware } from 'react-router'
import useRelay from 'react-router-relay'
import './index.css'
import {graphql} from '../package.json'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(graphql.request.url)
)

const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` }

ReactDOM.render(
  <Router
    forceFetch
    environment={Relay.Store}
    render={applyRouterMiddleware(useRelay)}
    history={browserHistory}
  >
    <Route path='/' component={ListPage} queries={ViewerQueries} />
    <Route path='/create' component={PokemonPage} queries={ViewerQueries} />
    <Route path='/view/:id' component={PokemonPage} queries={ViewerQueries} />
  </Router>
  , document.getElementById('root')
)
