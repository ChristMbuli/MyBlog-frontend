import React from "react";
import LOGO1 from "../assets/img/logo-1.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav
      class="navbar navbar-expand-lg sticky-top"
      style={{ backgroundColor: "white" }}
    >
      <div class="container px-5">
        <Link class="navbar-brand" to={"/"}>
          <img src={LOGO1} width="150" alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to={"/"}>
                Accueil
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/about"}>
                A propos
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/contact"}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
