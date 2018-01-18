import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Auth from '../containers/Auth';
import Example from '../containers/Example';
import Home from '../components/Home';
import ChooseCustomer from '../components/ChooseCustomer';
import Customer from '../containers/Customer';

const Role1OnlyRoute = ({ component: Component, role, ...rest }) => (
  <Route {...rest} render={ props => (
    role === 'role1' ? <Component {...props}/> : <Redirect to='/home'/>
  )}/>
)

const Role2OnlyRoute = ({ component: Component, role, ...rest }) => (
  <Route {...rest} render={ props => (
    role === 'role2' ? <Component {...props}/> : <Redirect to='/home'/>
  )}/>
)

const CustomerRoute = ({ component: Component, user, role, ...rest }) => (
  <Route {...rest} render={ (props) => {
    // Role one can get to any customer
    if( role === 'role1' ){
      return <Component {...props}/>;
    }
    // Role two can only get to his customer
    return user.customerId === props.match.params.customerId
      ? <Component {...props}/>
      : <Redirect to='/home'/>
  }}/>
)

const Routes = ({role, user}) => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/example" component={Example} />
    <Role1OnlyRoute path="/foo" component={()=>(<h1>Foo</h1>)} role={role} />
    <Role1OnlyRoute path="/bar" component={()=>(<h1>Bar</h1>)} role={role} />
    <Role1OnlyRoute exact path="/customers" component={ChooseCustomer} role={role}/>
    <CustomerRoute path="/customers/:customerId" component={Customer} role={role} user={user}/>
    <Redirect to="/home"/>
  </Switch>
);

const PrivateRoutes = () => (
  <Auth render={Routes} />
);

export default PrivateRoutes;
