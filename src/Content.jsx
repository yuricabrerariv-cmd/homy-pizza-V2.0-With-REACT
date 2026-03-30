import { useEffect, useState } from "react";

import triangImg from './assets/Triangle.svg'
import pizzaDough from './assets/Icons/icon-pizza_dough.svg'
import pizzaCheese from './assets/Icons/icon-cheese.svg'
import pizzaSlice from './assets/Icons/icon-pizza_slice.svg'
import chef from './assets/Frame-Chef.svg'
import contentByFlag from './Content-by-Country'

//Displaying the content based on the flag selected
function Article({ activeFlag, customIngredients = [] }) {
    const [italyIngredients, setItalyIngredients] = useState([]);
    const [loadingIngredients, setLoadingIngredients] = useState(false);
    
    useEffect(() => {
      if (activeFlag !== "italy") return;
      if (italyIngredients.length > 0) return;
    
      async function loadItalianIngredients() {
        try {
          setLoadingIngredients(true);
    
          const response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/lookup.php?i=53014"
          );
          const data = await response.json();
          const meal = data.meals?.[0];
    
          if (!meal) return;
    
          const ingredients = Array.from({ length: 20 }, (_, index) => {
            const ingredient = meal[`strIngredient${index + 1}`]?.trim();
            const measure = meal[`strMeasure${index + 1}`]?.trim();
    
            if (!ingredient) return null;
            return measure ? `${measure} ${ingredient}`.trim() : ingredient;
          }).filter(Boolean);
    
          setItalyIngredients(ingredients);
        } catch (error) {
          console.error("Failed to load Italian ingredients:", error);
        } finally {
          setLoadingIngredients(false);
        }
      }
    
      loadItalianIngredients();
    }, [activeFlag, italyIngredients.length]);

    if (!activeFlag) {
    return (
      <article>
        <div className="welcomingIllustration">
          <h5 className="welcomingFrase">
            Which pizza style do you feel like cooking today?
          </h5>
          <img src={chef} alt="chef illustration" />
        </div>
      </article>
    );
  }

  const isCustomPizza = activeFlag === "custom";

  const customPizzaContent = {
    title: "Your Customized Pizza",
    ingredients:
      customIngredients.length > 0
        ? customIngredients
        : ["No ingredients selected yet."],
    process: contentByFlag.italy.process,
  };

  const content = isCustomPizza ? customPizzaContent : contentByFlag[activeFlag];

  const ingredientsToShow =
  activeFlag === "italy"
    ? (italyIngredients.length > 0 ? italyIngredients : ["Loading Italian ingredients..."])
    : content.ingredients;


    const ingredientColumnSize = Math.ceil(ingredientsToShow.length / 3);
    const ingredientColumns = [
        ingredientsToShow.slice(0, ingredientColumnSize),
        ingredientsToShow.slice(ingredientColumnSize, ingredientColumnSize * 2),
        ingredientsToShow.slice(ingredientColumnSize * 2),
    ];


  const processColumns = [
    content.process.slice(0, 4),
    content.process.slice(4, 8),
    content.process.slice(8),
    ];

  return (
    <article>
      {!isCustomPizza ? (
        <div>
          <div className={`yellow-arrow yellow-arrow--${activeFlag}`}>
            <img className="arrow" src={triangImg} alt="" />
          </div>

          <div className="story">
            <div className="history">
              <div className="story-title">
                <h6>{content.title}</h6>
              </div>
              <div className="story_paragraph">
                {content.history.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <img className="pizza-cubana" src={content.image} alt={content.imageAlt} />
          </div>
        </div>
      ) : (
        <div className="custom-pizza-title-wrap">
          <h6 className="yourCPizza">{content.title}</h6>
        </div>
      )}

      <div className="ingredient">
        <div id="processCap">
          <div className="yellow-line-left"></div>
          <h5 className="recipe-instructions-title">Ingredients</h5>
          <div className="yellow-line-right"></div>
        </div>

        <div className="recipe-instructions">
          <div className="ingredients-C1">
            <ul>
              {ingredientColumns[0].map((item) => (
                <li key={item}><p>{item}</p></li>
              ))}
            </ul>
          </div>

          <div className="ingredients-C2">
            <ul>
              {ingredientColumns[1].map((item) => (
                <li key={item}><p>{item}</p></li>
              ))}
            </ul>
          </div>

          <div className="ingredients-C3">
            <ul>
              {ingredientColumns[2].map((item) => (
                <li key={item}><p>{item}</p></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="recipe">
        <div id="processCap">
          <div className="yellow-line-left"></div>
          <h5 className="recipe-instructions-title">The Process</h5>
          <div className="yellow-line-right"></div>
        </div>

        <div className="recipe-instructions">
          <div className="instruction-1">
            <div className="illustration-capsule">
              <img src={pizzaDough} alt="pizza dough icon" />
            </div>
            <ul>
              {processColumns[0].map((step) => (
                <li key={step}><p>{step}</p></li>
              ))}
            </ul>
          </div>

          <div className="instruction-2">
            <div className="illustration-capsule">
              <img src={pizzaCheese} alt="cheese icon" />
            </div>
            <ul>
              {processColumns[1].map((step) => (
                <li key={step}><p>{step}</p></li>
              ))}
            </ul>
          </div>

          <div className="instruction-3">
            <div className="illustration-capsule">
              <img src={pizzaSlice} alt="pizza slice icon" />
            </div>
            <ul>
              {processColumns[2].map((step) => (
                <li key={step}><p>{step}</p></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}


export default Article;