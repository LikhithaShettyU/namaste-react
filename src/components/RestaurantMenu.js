  
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();  

    const dummy = "Dummy Data";

    const resInfo = useRestaurantMenu(resId);

    const[showIndex, setShowIndex] = useState(0);

    if (resInfo===null) return <Shimmer />;
    
    const { name, cuisines = [], costForTwoMessage } =
        resInfo?.cards?.[2]?.card?.card?.info || {};
const MENU_TYPE = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const findCategories = (info) => {
  if (!info) return [];

  // try direct known path first (may contain empty objects)
  const direct = info?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // fallback to top-level cards array
  const topCards = Array.isArray(direct) ? direct : Array.isArray(info?.cards) ? info.cards : [];

  // return only real ItemCategory cards that have itemCards with length > 0
  return topCards.filter(
    (c) =>
      c?.card?.card?.["@type"] === MENU_TYPE &&
      Array.isArray(c?.card?.card?.itemCards) &&
      c.card.card.itemCards.length > 0
  );
};

const categories = findCategories(resInfo) ?? [];

return (
  <div className="text-center px-4">
    <h1 className="font-bold my-6 text-2xl">{name}</h1>
    <p className="font-bold text-lg mb-6">
      {cuisines.join(", ")} - {costForTwoMessage}
    </p>

    {categories.length === 0 && (
      <div className="text-gray-500">No categories found</div>
    )}

    {categories.map((category, index) => (
      // controlled component
      <RestaurantCategory
        key={category?.card?.card?.title}
        data={category}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex((prevIndex) => (prevIndex === index ? null : index))}
        dummy = {dummy}
      />
    ))}
  </div>
);

};

export default RestaurantMenu;