import React from 'react';
import { withRouter,Route,NavLink } from 'react-router-dom'
import Resume from "../Links/resume";
import Connect from "../Links/connect";
import MainPage from "../Links/mainPage";
import Portfolio from "../Links/portfolio";
import Profile from "../Links/profile";

function Container() {
  return (
    <>
    <nav>
    <NavLink  to='/'>Home</NavLink>
    <NavLink to='/resume'>Resume</NavLink>
    <NavLink to='/connect'>Connect</NavLink>
    <NavLink to='/portfolio'>Portfolio</NavLink>
    <NavLink to='/profile'>Profile</NavLink>
    </nav>
    <main>
    <Route exact path="/" component={MainPage} />
    <Route  path="/resume" component={Resume} />
    <Route  path="/connect" component={Connect} />
    <Route  path="/portfolio" component={Portfolio} />
    <Route  path="/profile" component={Profile} />
    </main>
    </>
  );
}

export default withRouter(Container);
