import ItemList from "./itemList";
import { useState } from "react";
import react from "react";


const RestaurantCategory = ({data, showItems, setShowIndex, dummy}) => {


    const handleClick = () => {
        setShowIndex();
    }
    

const card = data?.card?.card ?? data ?? {};


const title = card?.title ?? "Untitled";
const items = Array.isArray(card?.itemCards) ? card.itemCards : [];

    return (
      <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{title} ({items.length})</span>
            
            
                <span className="select-none">🢃</span>
            </div>
            {showItems && <ItemList items={items} dummy={dummy}/>}
         </div>
            
         
        </div>
    );
}

export default RestaurantCategory;