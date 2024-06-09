import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { GlobalContext } from '../Context'

const Navbar = () => {

const {searchParam, setSearchParam,handleSubmit} = useContext(GlobalContext);

console.log(searchParam);

  return (
    <nav className='flex justify-between items-center py-5 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 bg-orange-900 mt-0 max-w-[1350px]'>
      <h2 className='text-5xl font-semibold text-slate-300 pl-5'>
           <NavLink to={'/'} >FoodRecipe</NavLink>
       </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" 
               name='search'
               value={searchParam}
               onChange={(event) => setSearchParam(event.target.value)}
               placeholder='Enter Item...' 
               className='bg-black/75 p-3 px-8 mr-3 rounded-full outline-none lg:w-96 shadow-md hover:shadow-red-300 focus:shadow-red-200  '/>
      </form>
      <ul className='flex gap-5 mr-5'>
        <li>
           <NavLink to={'/'} className='text-slate-300 hover:text-white text-xl hover:text-2xl duration-100 '>Home</NavLink>
        </li>
        <li>
           <NavLink to={'/Favorites'} className='text-slate-300 hover:text-white text-xl hover:text-2xl duration-100 '>Favorites</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
