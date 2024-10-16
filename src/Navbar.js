import React from 'react';
import logo from './assets/images/HC_Logo_Color.png.webp'; // Correct image path

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid text-center">
          <a className="navbar-brand mx-auto" href="#">
            <img src={logo} alt="Honolulu Coffee" width="150" />
          </a>
          <div className="d-flex justify-content-end">
            <a className="nav-link" href="#"><i className="bi bi-search"></i></a>
            <a className="nav-link" href="#"><i className="bi bi-person"></i></a>
            <a className="nav-link" href="#"><i className="bi bi-cart"></i></a>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                <li><a className="dropdown-item" href="#">All Coffee</a></li>
                <li><a className="dropdown-item" href="#">Coffee By Type</a></li>
                <li><a className="dropdown-item" href="#">Gourmet Food</a></li>
                <li><a className="dropdown-item" href="#">Merchandise</a></li>
                <li><a className="dropdown-item" href="#">Firepot Tea</a></li>
                <li><a className="dropdown-item" href="#">Gift Cards</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Subscriptions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Locations</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="learnDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Learn
              </a>
              <ul className="dropdown-menu" aria-labelledby="learnDropdown">
                <li><a className="dropdown-item" href="#">Blog</a></li>
                <li><a className="dropdown-item" href="#">About Us</a></li>
                <li><a className="dropdown-item" href="#">Our Farm to Cup</a></li>
                <li><a className="dropdown-item" href="#">Wholesale</a></li>
                <li><a className="dropdown-item" href="#">Learn More About Kona</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Careers</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
