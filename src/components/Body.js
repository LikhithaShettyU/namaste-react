import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {

    //Local State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilterdRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // Whenever state variable update, react triggers a renconcilation cycle(re-renders the component)
    console.log("Body Rendered", listOfRestaurants);

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

  

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
  );

  const { loggedInUser, setUserName } = useContext(UserContext);


    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                  <input 
                    type="text" 
                    className="border border-solid border-black" 
                    value={searchText} 
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                  />
                  <button className="bg-green-200 m-4 px-4 py-1 rounded-lg"
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
                <div className="flex items-center">
                   <label>UserName</label>
                   <input 
                   className="border border-black p-2" 
                   value={loggedInUser}
                   onChange={(e) => setUserName(e.target.value)}/>
                </div>
            </div>
            <div className="flex flex-wrap">
                {Array.isArray(listOfRestaurants) &&
                    filteredRestaurant.map((restaurant) => (
                    <Link 
                      key={restaurant.info.id} 
                      to={"/restaurants/"+restaurant.info.id}
                    >
                      <RestaurantCard resData={restaurant} />
                    </Link>
                ))}
  
            </div>
        </div>
    )
};

export default Body;