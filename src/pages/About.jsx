import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import IMAGE1 from "../assets/img/undraw_secure_login_pdn4.png";
import IMAGE2 from "../assets/img/undraw_Content_creator_re_pt5b.png";

const About = () => {
  return (
    <div>
      <Navigation />
      <header class="py-5">
        <div class="container px-5">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-xxl-6">
              <div class="text-center my-5">
                <h1 class="fw-bolder mb-3">A propos de notre Blog</h1>
                <p class="lead fw-normal text-muted mb-4">
                  Bienvenue sur{" "}
                  <span className="fw-bold" style={{ color: "#DB5300" }}>
                    Mbuli Blog
                  </span>
                  , votre plateforme d'expression libre et sans contraintes!
                  Ici, la créativité n'a pas de limites, et la parole est
                  entièrement entre vos mains...
                </p>
                <a
                  class="btn btn-lg"
                  href="#scroll-target"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  style={{ backgroundColor: "#DB5300", color: "white" }}
                >
                  Lire Plus
                </a>
                {/* Modal */}

                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">
                          A propos
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        Mbuli Blog a été conçu avec une philosophie simple :
                        offrir à chacun la possibilité de partager ses idées,
                        ses expériences, ses passions sans barrières. Pas besoin
                        de créer un compte fastidieux, vous pouvez accéder
                        immédiatement à la plateforme et publier votre article
                        en toute simplicité. Nous croyons en la liberté
                        d'expression et en la diversité des voix, c'est pourquoi
                        Mbuli Blog encourage les contributions de tous les
                        horizons. Les avantages de Mbuli Blog sont nombreux.
                        Tout d'abord, la facilité d'utilisation : pas de
                        formulaires compliqués ni de processus d'inscription
                        interminables. En quelques clics, vous partagez votre
                        contenu avec le monde entier. De plus, Mbuli Blog
                        favorise la spontanéité, car vous n'avez pas à vous
                        soucier des tracas liés à la gestion d'un compte
                        utilisateur. La diversité des sujets est une autre force
                        de Mbuli Blog. Que vous soyez passionné par la
                        technologie, la culture, la cuisine, les voyages ou tout
                        autre domaine, ce blog est la toile blanche qui vous
                        permet de peindre votre histoire. Mbuli Blog est
                        également un espace où la communauté peut interagir. Les
                        lecteurs peuvent apprécier, commenter et partager les
                        articles qui les inspirent. C'est un lieu d'échange où
                        les idées circulent librement, créant ainsi une
                        atmosphère dynamique et vivante. Rejoignez-nous sur
                        Mbuli Blog et faites partie de cette communauté de
                        conteurs, de penseurs et de créateurs. Exprimez-vous
                        sans limites, partagez vos réflexions et découvrez
                        l'inspiration à travers la diversité de nos
                        contributeurs. Mbuli Blog, où chaque voix compte.
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Fermer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Modal */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="py-5 bg-light" id="scroll-target">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src={IMAGE1}
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bolder">Accès Facile</h2>
              <p class="lead fw-normal text-muted mb-0">
                Oubliez les formalités d'inscription ! Vous pouvez accéder et
                naviguer sur le blog en toute simplicité.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container px-5 my-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-first order-lg-last">
              <img
                class="img-fluid rounded mb-5 mb-lg-0"
                src={IMAGE2}
                alt="..."
              />
            </div>
            <div class="col-lg-6">
              <h2 class="fw-bolder">Publication Instantanée</h2>
              <p class="lead fw-normal text-muted mb-0">
                Partagez votre contenu en un clic. Mbuli Blog favorise la
                spontanéité et la fraîcheur des idées.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
