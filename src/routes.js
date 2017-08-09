import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MemberList from './components/MemberList'

const routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={MemberList}/>
    </div>
  </Router>
)

export default routes
