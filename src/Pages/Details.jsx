import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../Context';

const Details = () => {
    const { id } = useParams();
    const { recipeDetailsData, setRecipeDetailsData, favoritesList, handleAddToFavorite } = useContext(GlobalContext);

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();

            if (data?.data?.recipe) {
                setRecipeDetailsData(data?.data?.recipe);
            }
        }
        getRecipeDetails();
    }, [id, setRecipeDetailsData]);

    return (
        <div className='container bg-[#a57034] mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 w-[100vw] '>
            <div className='row-start-2 lg:row-start-auto'>
                <div className='h-96 overflow-hidden rounded-xl group'>
                    <img src={recipeDetailsData?.image_url} className='w-full h-full object-cover block group-hover:scale-105 duration-300' alt='Recipe'/>
                </div>
            </div>
            <div className='flex flex-col gap-3 bg-pink-600S'>
                <span className='text-lg text-slate-950 font-medium'>{recipeDetailsData?.publisher}</span>
                <h3 className='font-bold text-2xl truncate text-black'>
                    {recipeDetailsData?.title}
                </h3>
                <div onClick={() => handleAddToFavorite(recipeDetailsData)} className='p-3 px-8 w-44 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'>
                    <button>
                        {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
                            (item) => item.id === recipeDetailsData?.id
                        ) !== -1
                            ? "Remove from favorites"
                            : "Add to favorites"}
                    </button>
                </div>
                <div>
                    <span className='text-2xl font-semibold text-black'>Ingredients</span>
                    <ul className='flex flex-col gap-3'>
                        {recipeDetailsData?.ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <span className='font-bold text-2xl truncate text-black'>{ingredient.quantity} {ingredient.unit}</span>
                                <span className='font-bold text-2xl truncate text-black'>{ingredient.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}



export default Details;

