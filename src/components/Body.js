import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () => {

    //Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);



    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setListOfRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
                ))}
  
            </div>
        </div>
    )
};

export default Body;