import React from "react";
import moment from "moment";
import "../../assets/css/cards.css";

const Cards = ({ post }) => {
  return (
    <>
      <div className="card1" key={post._id}>
        <div className="card-images">
          <img src={post.image} alt="post" />
        </div>

        <div className="texte d-flex">
          <h3 className="mt-2 text-bold">{post.title}</h3>
          <p className="text-body-tertiary">
            {post.content.slice(0, 50) + " ...Lire plus"}
          </p>
        </div>
        <div className="nomber align-items-center">
          <div className="d-flex justify-content-center ">
            <p className="me-3 fst-italic fw-medium">
              {" "}
              <i class="fa-regular fa-circle-user"></i> {post.created_by}
            </p>
          </div>
          <div className="start">
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
