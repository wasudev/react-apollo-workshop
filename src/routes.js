import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MemberList from './components/MemberList'
import MemberDetail from './components/MemberDetail'

const routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={MemberList}/>
      <Route exact path="/members/:id/comments" component={MemberDetail}/>
    </div>
  </Router>
)

export default routes
