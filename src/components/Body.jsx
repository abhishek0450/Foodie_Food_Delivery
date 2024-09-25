

import { useState, useEffect } from 'react';
import './Body.css';
import ResCard from "./ResCard";


const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filterRestaurantsList,setFilterRestaurantsList] = useState([]);
    const [search, setSearch] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.8045665&lng=86.2028754"
        );
        const json = await data.json();
        //const fetchedRestaurants = json.data.success.cards[4].gridWidget.gridElements.infoWithStyle.restaurants;
        const fetchedRestaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setRestaurants(fetchedRestaurants);
        setFilterRestaurantsList(fetchedRestaurants);
        //setRestaurants(fetchedRestaurants2);

        
        
    };

    const filterHighRatings = () => {
        const filteredRestaurants = restaurants.filter(restaurant => {
            const rating = parseFloat(restaurant.info.avgRatingString); 
            return rating >= 4;
        });
        setFilterRestaurantsList(filteredRestaurants);
    };

    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);

        const searchedRestaurants = restaurants.filter(restaurant =>
            restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()) 
        );
        
        setFilterRestaurantsList(searchedRestaurants );
    };

    
    
     return (
        <div className="body-main">
            <div className="searchbar">
                <input type="text" value={search}
                    onChange={handleSearchChange} placeholder="Search for food items" />
                <button className='search-button'>Search</button>
                <button className='filter-ratings-btn' onClick={filterHighRatings}>Ratings Over 4.0</button>
            </div>

            <div className='cusine-select'>

            </div>

            <div className="res-component">
                {filterRestaurantsList.map((restaurant) => {
                    return (
                        <ResCard key={restaurant.info.id} {...restaurant.info} /> 
                    );
                })}
            </div>
        </div>
    );
}


export default Body;
