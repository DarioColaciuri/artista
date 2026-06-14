import React from "react";
import Stars from "../parts/Stars";
import "../css/card.css";

const Card = ({ title, information, preview, code, image }) => {
  return (
    <div className="card">
      <Stars count={15} topRange={100} />
      {title && <h1 className="title">{title}</h1>}
      <div className="content">
        {image && <img className="image" src={image} alt={title} />}
        {information && <p>{information}</p>}
        <div className="buttons">
          {preview && (
            <a
              title="Preview"
              target="_blank"
              rel="noopener noreferrer"
              href={preview}
            >
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          )}
          {code && (
            <a
              title="Code"
              target="_blank"
              rel="noopener noreferrer"
              href={code}
            >
              <i className="bi bi-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
