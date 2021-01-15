import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import avatar from '../../img/avatar.svg'

const Brand = () => (
  <NavLink to="/" activeClassName="navbar-brand">
    <span className="d-block d-lg-none">Gene Ordanza II</span>
    <span className="d-none d-lg-block">
      <img src={avatar}
           className="img-fluid img-profile rounded-circle mx-auto mb-2"
           alt=".."
      />
    </span>
  </NavLink>
)

const MenuBarIcon = () => (
  <button className="navbar-toggler" type="button"
          data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
)

const MenuOption = () => (
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">

      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/skills">Skills</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/toyapps">Toy Apps</Link>
      </li>

    </ul>
  </div>
)

const Sidebar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
       id="sideNav" >
    <Brand />
    <MenuBarIcon />
    <MenuOption />
  </nav>
)

export default Sidebar
