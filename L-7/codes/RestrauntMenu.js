import { useParams } from "react-router-dom";

import { useEffect ,useState } from "react";
import { IMG_CDN_URL } from "./constant";
import Shimmer from "./Shimmer";


const RestaurantMenu=()=>{
   /*
    const params=useParams();
    const {id}=params;
    console.log(params)
*/
//destructure
//whatever passes in url now through configuration help it comes here by using useparms
const {resId}=useParams();
const [restaurant,setRestaurant] = useState(null);






useEffect(()=>{
getRestaurantInfo();
},[])
async function getRestaurantInfo(){
    const data= await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" + resId
    );
    const json=await data.json();
    console.log(json.data)
  
    setRestaurant(json?.data)
}


if(!restaurant){
    return <Shimmer/>
}



    return(
        <div className="menu">
        <div>
            <h1>
                
            </h1>
            <h2>{restaurant.name}</h2>
          { // <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
          }
            <h2>{restaurant.city}</h2>
            <h2>{restaurant.avgRating}</h2>
            <h2>{restaurant.area}</h2>
            <h2>{restaurant.costForTwoMsg}</h2>
        </div>
        {
 /*         <div>
            <h1>menu items</h1>
            <ul>
              {Object.values(restaurant.menu.items).map((items)=>(
                <li key={items.id}>{items.name}</li>
              ))}   
            </ul>
         

          </div>
              */}
</div>
    )
}

export default RestaurantMenu;