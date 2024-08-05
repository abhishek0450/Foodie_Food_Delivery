

import './Body.css';
import ResCard from "./ResCard";
import  restaurantList  from '../utils/mockData';

const Body = () => {
 
  return (
    <div className="body-main">
      <div className="searchbar">
        <input type="text" placeholder="Search for food items" />
        <button className='search-button'>Search</button>
      </div>
      <div className="res-component">
      {restaurantList.map((restaurant) => {
          return (
            <ResCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
        
      </div>
    </div>
  );
}

export default Body;
