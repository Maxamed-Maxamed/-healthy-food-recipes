import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../api/spoonacular';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const details = await getRecipeDetails(id);
      setRecipe(details);
    };
    fetchRecipeDetails();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
    </div>
  );
};

export default RecipeDetailPage;