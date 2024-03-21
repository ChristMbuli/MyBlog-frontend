import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importez useParams
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import axios from "axios";
import moment from "moment";

const Single = () => {
  const { id } = useParams(); // Utilisez useParams pour obtenir l'ID du post
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9000/server/view/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération du post :", error);
      }
    };

    fetchPost();
  }, [id]); // Assurez-vous de déclencher la requête uniquement lorsque l'ID change

  if (!post) {
    return <div>Chargement du post...</div>; // Afficher un message de chargement ou un spinner
  }

  return (
    <>
      <Navigation />
      <section className="py-5 bg-body-tertiary">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-3">
              {/* Auteur */}
              <div className="d-flex align-items-center mt-lg-5 mb-4">
                <i class="fa-solid fa-user"></i>
                <div className="ms-3">
                  <div className="fw-bold">{post.created_by}</div>{" "}
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <article>
                <header className="mb-4">
                  <h1 className="fw-bolder mb-1">{post.title}</h1>{" "}
                  {/* Remplacez par le titre du post */}
                  <div className="text-muted fst-italic mb-2">
                    publier il y a {moment(post.createdAt).fromNow()}
                  </div>{" "}
                  <a
                    className="badge text-decoration-none link-light"
                    href="#!"
                    style={{ backgroundColor: "#DB5300" }}
                  >
                    {/* tags */}
                    {post.tags}{" "}
                  </a>
                </header>
                <figure className="mb-4">
                  <img
                    className="img-fluid rounded"
                    src={post.image}
                    alt="..."
                  />
                </figure>
                <section className="mb-5">
                  <p className="fs-5 mb-4">
                    {post.content} {/* Remplacez par le contenu du post */}
                  </p>
                </section>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Single;
