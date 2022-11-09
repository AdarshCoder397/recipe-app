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
          title={"Masala French Toast"}
          header={" Masala French Toast is a quick and easy-to-make filler breakfast recipe"}
          image={
            "https://www.ndtv.com/cooks/images/masala-french-toast_article.jpg"
          }
          redirect={"https://food.ndtv.com/recipe-masala-cheese-french-toast-106675"}
        />
        <RecipeCard
          title={"Kadai Panner"}
          header={"Kadai paneer is a simple yet amazingly flavorful paneer dish"}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPgM4uVlchvL_IHNxvrw22mR7C96oI9unBw&usqp=CAU"
          }
          redirect={"https://www.indianhealthyrecipes.com/kadai-paneer-gravy-recipe/"}
        />
        <RecipeCard
          title={"Upma"}
          header={"Upma is one of the most-loved dishes"}
          image={
            "https://www.dwarakaorganic.com/wp-content/uploads/2022/04/Upma-870x470.jpg"
          }
          redirect={"https://www.indianhealthyrecipes.com/upma-recipe-how-to-make-upma/"}
        />
        
      </div>
    </div>
  );
}

export default Content;
