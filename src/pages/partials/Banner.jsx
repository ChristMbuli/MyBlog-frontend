import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section class="py-1 text-center container bg-body-tertiary">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Blog Public</h1>
          <p class="lead text-body-secondary">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <Link
              to={"/create/post"}
              class="btn  my-2 text-white"
              style={{ backgroundColor: "#DB5300" }}
            >
              Publier un post
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
