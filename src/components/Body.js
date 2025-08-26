import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";



const Body = () => {

    //Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilterdRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // Whenever state variable update, react triggers a renconcilation cycle(re-renders the component)
    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
  
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0440477&lng=77.62086599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterdRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  };



    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                  <input 
                    type="text" 
                    className="search-box" 
                    value={searchText} 
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                  />
                  <button 
                   onClick={() => {
                    //Filter the restraunt cards and update the ui
                    // searchText
                    console.log(searchText);

                    const filteredRestaurant = listOfRestaurants.filter(
                      (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    setFilterdRestaurant(filteredRestaurant);

                   }}
                  >
                    Search
                  </button>
                </div>
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
                {Array.isArray(listOfRestaurants) &&
                    filteredRestaurant.map((restaurant) => (
                    <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
                ))}
  
            </div>
        </div>
    )
};

export default Body;