import { useParams } from "react-router-dom";

import { useEffect ,useState } from "react";
//import { IMG_CDN_URL } from "./constant";
import Shimmer from "./Shimmer";
import { Menu_Api_Url } from "./constant";
import useRestaurantMenu from "./utils/useRestrauntMenu";
import Categories from "./Categories";




const RestaurantMenu=()=>{
  const {resId}  = useParams();
  const resInfo=useRestaurantMenu(resId);
  
  const [showIndex,setShowIndex]=useState(0);
  {
/*
    const params=useParams();
    const {id}=params;
    console.log(params)
*/

///earlier from line 16 using these in utils of useRestrsuntMenu.js 
/*
//destructure
//whatever passes in url now through configuration help it comes here by using useparms
const {resId}=useParams();


const [restaurant,setRestaurant] = useState(null);




//https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=

useEffect(()=>{
getRestaurantInfo();
},[])

async function getRestaurantInfo(){
   
    const data = await fetch(
      Menu_Api_Url+resId
        
      );
      
    const json=await data.json();
    console.log(json.data)
  
    setRestaurant(json?.data)
}
*/


  }


if(!resInfo){
  return <Shimmer/>
}

/**/
console.log(resId)



const {name ,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
const categories=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(item=>
  item?.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  console.log(categories)
    return(
        <div className="menu">
        <div>
          
           
            <h2>{name}</h2>
            <h2>{cuisines.join(",")}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>{}</h2>

          <h1>MENU</h1>
          <ul>
            {/*
        {itemCards.map((item)=>(

         
        <li key={item.card.info.id}>
            {item.card.info.name}--{item.card.info.price/100}
        </li>
        
        
        ))}
        */
        }
        {categories.map((category ,index)=>(
        //controlled component //achoridum lifting state
          <Categories data={category?.card?.card} key={category?.card?.title}
          
          
          showItem={index===showIndex? true :false}
          setShowIndex={()=>setShowIndex(index)} 
          
          />
        ))}

          </ul>

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