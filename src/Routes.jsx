import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRouter from './Components/Auth/Helper/PrivateRouter'
import Cart from './Components/Core/Cart'
import Home from './Components/Core/Home'
import SinglePage from './Components/Core/SinglePage'
import SignIn from './Components/User/SignIn'
import SignUp from './Components/User/SignUp'
import UserDashboard from './Components/User/UserDashboard'


const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/detail/:slug" exact component={SinglePage} />
      <PrivateRouter path="/user/dashboard/" exact component={UserDashboard} />
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;
