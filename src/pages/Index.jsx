import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Banner from "./partials/Banner";
import Cards from "./partials/Cards";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("Avant l'appel Axios");
        const response = await axios.get("https://myblog-backend-71rg.onrender.com/server/all", {
          withCredentials: true,
        });

        console.log("Après l'appel Axios, réponse :", response);
        setPosts(response.data.posts);
        setLoading(false);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des posts:",
          error.message
        );
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  // Le tableau vide en tant que deuxième argument signifie que useEffect s'exécutera uniquement après le montage initial du composant

  return (
    <main class="flex-shrink-0">
      {/* Barre de navigation */}
      <Navigation />
      {/* Banner */}
      <div>
        <Banner />
      </div>

      {/* Posts */}
      <div className="cards">
        {loading ? (
          // Afficher un effet de chargement si loading est vrai
          <p>Chargement en cours...</p>
        ) : (
          posts.map((post) => (
            <Link
              to={`/detail/post/${post._id}`}
              className="nav-link"
              key={post._id}
            >
              {" "}
              <Cards post={post} />
            </Link>
          ))
        )}
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;
