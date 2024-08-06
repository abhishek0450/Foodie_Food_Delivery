
import { useState } from 'react';
import './Body.css';

import ResCard from "./ResCard";
import  restaurantList  from '../utils/mockData';

const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [search, setSearch] = useState("");

  function filterHighRatings() {
    console.log('Original restaurants:', restaurants);

    const filteredRestaurants = restaurants.filter(restaurant => {
      const rating = parseFloat(restaurant.data.avgRating);
      console.log(`Restaurant: ${restaurant.data.name}, Rating: ${rating}`);
      return rating >= 4;
    });

    setRestaurants(filteredRestaurants);
    
  }

  function handleSearchChange(event) {
    const searchValue = event.target.value;
    setSearch(searchValue);

    const searchedRestaurants = restaurantList.filter(restaurant => 
      restaurant.data.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setRestaurants(searchedRestaurants);
  }
//   function handleSearch() {
//     const searchedRestaurants = restaurantList.filter(restaurant => 
//       restaurant.data.name.toLowerCase().includes(search.toLowerCase())
//     );
//     setRestaurants(searchedRestaurants);
//   }

 
  return (
    <div className="body-main">
      <div className="searchbar">
        <input type="text" value={search}
          onChange={handleSearchChange} placeholder="Search for food items" />
        <button className='search-button'>Search</button>
        <button className='filter-ratings-btn' onClick={filterHighRatings}>Ratings Over 4.0</button>
      </div>
      <div className="res-component">
      {restaurants.map((restaurant) => {
          return (
            <ResCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
        
      </div>
    </div>
  );
}

export default Body;

