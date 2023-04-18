import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (<center><form class="azq">
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <h3>{ingredient.text}</h3>
        ))}<br></br>
      </ol>
      <p>{calories}</p>
      <img src={image} alt="" /><br></br>
    </div></form></center>
  );
};

export default Recipe;
