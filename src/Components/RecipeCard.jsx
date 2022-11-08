import React from "react";
import './RecipeCard.css'

function RecipeCard({ title, header, image , redirect }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top card-img" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {header}
        </p>
        <a href={`${redirect}`} target={'_blank'} className="btn btn-primary">
         Check recipe
        </a>
      </div>
    </div>
  );
}

export default RecipeCard;
