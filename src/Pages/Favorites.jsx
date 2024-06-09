import React, { useContext } from 'react';
import RecipeItem from '../Components/RecipeItem';
import { GlobalContext } from '../Context';

const Favorites = () => {
    const { favoritesList, loading } = useContext(GlobalContext);

    if (loading) return <div>Loading... Please wait!</div>;

    return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10 '>
            {favoritesList && favoritesList.length > 0
                ? favoritesList.map((item) => <RecipeItem key={item.id} item={item} />)
                : <div>
                    <p className='lg:text-4xl text-xl text-center text-[#c49640] font-semibold'>Search for Delicious Recipies...</p>
                  </div>
            }
        </div>
    );
}

export default Favorites;
