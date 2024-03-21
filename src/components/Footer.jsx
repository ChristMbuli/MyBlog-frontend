import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="bg-dark py-4 mt-auto ">
      <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
          <div class="col-auto">
            <div class="small m-0 text-white">
              Copyright &copy; développé par{" "}
              <Link
                to={
                  "https://www.linkedin.com/in/christ-mbuli-217040258/?originalSubdomain=ma"
                }
                target="_blank"
              >
                Christ Mbuli
              </Link>{" "}
              || 2024
            </div>
          </div>
          <div class="col-auto">
            <Link class="link-light small" to={"/"}>
              Accueil
            </Link>
            <span class="text-white mx-1">&middot;</span>
            <Link class="link-light small" to={"/about"}>
              A propos
            </Link>
            <span class="text-white mx-1">&middot;</span>
            <Link class="link-light small" to={"/contact"}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
