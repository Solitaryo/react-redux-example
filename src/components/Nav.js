import React from "react";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#292B2C'}}>
    <a className="navbar-brand font-weight-bol" href="#">Recipe Finder</a>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active font-weight-bol" href="#">Home <span className="sr-only">(current)</span></a>
      </div>
    </div>
  </nav>
)

export default Nav;