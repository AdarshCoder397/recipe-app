import React from "react";
import "./Content.css";
import RecipeCard from "./RecipeCard";

function Content() {
  return (
    <div className="content">
      <h1 className="head1">Top Recipies</h1>
      <div className="cards">
        <RecipeCard
          title={"Cheese Pizza"}
          header={"Make a delicious cheese pizza"}
          image={
            "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
          }
          redirect={"https://recipes.timesofindia.com/recipes/cheese-pizza/rs53110049.cms"}
        />
        <RecipeCard
          title={"Cheese Pizza"}
          header={"Make a delicious cheese pizza"}
          image={
            "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
          }
          redirect={"cheese_pizza"}
        />{" "}
        <RecipeCard
          title={"Cheese Pizza"}
          header={"Make a delicious cheese pizza"}
          image={
            "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
          }
          redirect={"cheese_pizza"}
        />{" "}
        <RecipeCard
          title={"Cheese Pizza"}
          header={"Make a delicious cheese pizza"}
          image={
            "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
          }
          redirect={"cheese_pizza"}
        />{" "}
        <RecipeCard
          title={"Cheese Pizza"}
          header={"Make a delicious cheese pizza"}
          image={
            "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"
          }
          redirect={"cheese_pizza"}
        />
      </div>
    </div>
  );
}

export default Content;
