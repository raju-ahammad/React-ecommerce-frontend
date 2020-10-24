import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Core/Home'
import SinglePage from './Components/Core/SinglePage'
import SignUp from './Components/User/SignUp'

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/detail/:slug" exact component={SinglePage} />
      {/* <PrivateRouter path="/user/dashboard/" exact component={} /> */}
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;
