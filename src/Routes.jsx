import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Core/Home'

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <PrivateRouter path="/user/dashboard/" exact component={} /> */}
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;
