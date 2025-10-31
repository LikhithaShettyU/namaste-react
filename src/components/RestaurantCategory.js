import ItemList from "./itemList";

const RestaurantCategory = ({data}) => {
console.log(data);
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 flex justify-between">
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            {/*Header*/}
            
            {/*Accordion Body*/}
            <ItemList items={data.itemCards} />
        </div>
    );
}

export default RestaurantCategory;