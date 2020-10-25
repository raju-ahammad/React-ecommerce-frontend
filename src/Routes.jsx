import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRouter from './Components/Auth/Helper/PrivateRouter'
import Home from './Components/Core/Home'
import SinglePage from './Components/Core/SinglePage'
import SignUp from './Components/User/SignUp'
import UserDashboard from './Components/User/UserDashboard'


const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/detail/:slug" exact component={SinglePage} />
      <PrivateRouter path="/user/dashboard/" exact component={UserDashboard} />
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;
