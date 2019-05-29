import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
    
      <nav className="navbar navbar-expand-sm navbar-light bg-light mheader container">
        <NavLink className="navbar-brand mlogo" to="/home">
          <img src="https://cdn.worldvectorlogo.com/logos/react.svg" width="30" height="30" className="d-inline-block align-top mr-1" alt="" />
          <span className="home1">ホームページ</span>
        </NavLink>
        <button className="navbar-toggler mbt" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/marukochan"><span className="home">ちびまる子ちゃん</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/sazaesan"><span className="home">サザエさん</span></NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/conankun"><span className="home">名探偵コナン</span></NavLink>
            </li>
          </ul>
        </div>  
      </nav>
    );
  }
}

export default Header;
