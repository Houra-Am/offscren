import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import movie from "../image/popcorn.png";
import Favorites from "./Favorites";
import Home from "./Home";
import Popular from "./Popular";
import PopularBattle from "./PopularBattle";
import Weekly from "./Weekly";
import WeeklyBattle from "./WeeklyBattle";
import Error404 from "./Error404";

export default function navbar() {
  return (
    <BrowserRouter>
      <div className='AppNavbar'>
        <nav className='navbar navbar-expand-lg fixed-top'>
          <Link className='navbar-brand' to='/'>
            <img
              alt=''
              src={movie}
              width='30'
              height='30'
              className='d-inline-block align-top mr-2 ml-md-4'
            />{" "}
            OFF SCREEN
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/weekly'>
                  Weekly <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/weeklyBattle'>
                  Weekly Battle
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/popular'>
                  Popular
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/popularBattle'>
                  Popular Battle
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/favorites'>
                  Favorites
                </Link>
              </li>
            </ul>
            <form className='d-flex ml-auto'>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-danger' type='submit'>
                Search
              </button>
            </form>
          </div>
        </nav>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/weekly' component={Weekly} />
          <Route path='/weeklyBattle' component={WeeklyBattle} />
          <Route path='/popular' component={Popular} />
          <Route path='/popularBattle' component={PopularBattle} />
          <Route path='/favorites' component={Favorites} />
          <Route path='*' component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
