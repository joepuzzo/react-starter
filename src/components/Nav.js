import React from 'react';
import { Link } from 'react-router-dom';

const Role1Nav = ({logout}) => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/foo">Foo</Link>
        </li>
        <li>
          <Link to="/bar">Bar</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
        <li>
          <Link to="/customers">Choose Customer</Link>
        </li>
        <li>
          <Link to="/" onClick={logout}>Logout</Link>
        </li>
      </ul>
    </nav>
  </div>
);

const Role2Nav = ({logout, user}) => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/baz">Baz</Link>
        </li>
        <li>
          <Link to="/example">Example</Link>
        </li>
        <li>
          <Link to={`/customers/${user.customerId}`}>Customer</Link>
        </li>
        <li>
          <Link to="/" onClick={logout}>Logout</Link>
        </li>
      </ul>
    </nav>
  </div>
);

const PublicNav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

const Nav = ({authenticated, role, user, logout}) => {
  if( !authenticated ){
    return ( <PublicNav /> );
  } else if( role === 'role1' ){
    return ( <Role1Nav logout={logout}/> );
  } else if ( role === 'role2' ){
    return ( <Role2Nav logout={logout} user={user} /> );
  } else {
    return <span>Error user must have a role.</span>
  }
}

export default Nav;
