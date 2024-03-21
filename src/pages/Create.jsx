import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [created_by, setCreateBy] = useState("");
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    const house = {
      title,
      content,
      tags,
      created_by,
    };

    // Convertir l'état formData en FormData
    const formToSend = new FormData();
    Object.entries(house).forEach(([key, value]) => {
      formToSend.append(key, value);
    });

    // Ajouter les images sélectionnées
    if (formData.images) {
      Array.from(formData.images).forEach((image) => {
        formToSend.append("image", image);
      });
    }

    try {
      const res = await axios.post(
        "https://myblog-backend-71rg.onrender.com/server/add",
        formToSend,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navigation />
      <div className="container mb-5">
        <form class="row g-3 needs-validation" onSubmit={handleCreate}>
          <div class="col-md-4">
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre..."
              required
            />
          </div>
          <div class="col-md-4">
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                placeholder="Tags"
                required
              />{" "}
              <span class="input-group-text" id="inputGroupPrepend">
                @
              </span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Description</label>
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group has-validation">
              <input
                name="image"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    images: e.target.files,
                  })
                }
                type="file"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                required
              />{" "}
            </div>
          </div>
          <div class="col-md-4">
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                placeholder="Votre Prénom et Nom"
                id="validationCustomUsername"
                value={created_by}
                onChange={(e) => setCreateBy(e.target.value)}
                aria-describedby="inputGroupPrepend"
                required
              />{" "}
            </div>
          </div>
          <hr />

          <div class="col-12 float-end">
            <button
              type="submit"
              class="btn me-3 text-white"
              style={{ backgroundColor: "#DB5300" }}
            >
              Publier <i class="fa-solid fa-paper-plane"></i>
            </button>
            <Link class="btn btn-danger me-3" to={"/"}>
              Anuler
            </Link>
          </div>
        </form>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
};

export default Create;
