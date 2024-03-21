import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <section class="container mb-4">
        <h2 class="h1-responsive font-weight-bold text-center my-4">
          Contactez-nous
        </h2>
        <p class="text-center w-responsive mx-auto mb-5">
          Bienvenue dans l'espace de contact de Mbuli Blog ! Nous sommes ravis
          d'entendre vos commentaires, suggestions et idées.
        </p>

        <div class="row">
          <div class="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div class="row mb-2">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Votre nom complet"
                      class="form-control"
                    />
                  </div>
                </div>

                <div class="col-md-6 mb-2">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Votre email"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Sujet"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>

              <div class="row mb-2">
                <div class="col-md-12">
                  <div class="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      class="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left">
              <button
                type="submit"
                class="btn"
                style={{ backgroundColor: "#DB5300", color: "white" }}
                onclick="document.getElementById('contact-form').submit();"
              >
                Envoyer
              </button>
            </div>
            <div class="status"></div>
          </div>

          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li className="d-flex">
                <i class="fas fa-map-marker-alt me-2 "></i>
                <p className="me-2">Casablanca, Maroc</p>
              </li>

              <li className="d-flex">
                <i class="fas fa-phone mt-4 me-2"></i>
                <p className="me-2">+212 778674550</p>
              </li>

              <li className="d-flex">
                <i class="fas fa-envelope mt-4 me-2"></i>
                <Link to={"mailto:christmb017@gmail.com"} className="me-2">
                  christmb017@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
