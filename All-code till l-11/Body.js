
//import { restaurantList } from "./constant";
import RestroCard ,{withPromtedLabel} from "./RestroCard";
import { useState } from "react";
import { useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import useOnlineStatus from "./utils/useOnlineStatus";
import Instamart from "./Instamart";
//console.log("ji")
import UserContext from "./utils/UserContext";

////function for filter reastaurantlist according to searchInput
function filterData(searchInput ,resaturants){
  const filterData=resaturants.filter((restaurant) =>
  restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
   return filterData;
}



 const Body=()=>{
    //searchState is a local state variable ---usestate
    const[searchInput , setSearchInput]=useState("");
    ////here we render restaurantlist using state variable as 
    ////for filter and updating dom
    const [filterrestaurants ,setFilterRestaurants] = useState([]);

    const[allRestaurants,setAllRestaurants]=useState([])
      
    const {user,setUser} = useContext(UserContext);
   
     const RestaurantCardPromoted=withPromtedLabel(RestroCard)
  


 
    /*
useEffect(()=>{
     console.log("hi now it going to be called when search text changes")//second this will call as it is callback function

},[])

console.log("render")//first this calll

*/
///now moving this 
useEffect(()=>{

//API calll

getRestaurants()
},[])

async function getRestaurants(){
  const data=await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
  const json=await data.json();
  console.log(json);
  //optional chaining ?  
  //setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  setAllRestaurants( json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilterRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards)this is for the first time show as because
//in map we are using filterResaurant which initially empty so here we providing api data to the filterrestaurant 
//so that initially it will show it 

}



const onlineStatus=useOnlineStatus();
if(onlineStatus===false){
  return(
<h1>look like you are offline!! plz check your net connection</h1>
  );
}


//not render component early return
   if(!allRestaurants) return null;
   //if(filterrestaurants?.length === 0 ) return <h1>nothing found</h1>
     console.log(allRestaurants)

    return (allRestaurants.length === 0 ) ? <Shimmer/>:(

<>
<div className="search-container m-4 p-4">
<input type="text" 
className="search-input border border-solid border-black outline-lime-900" 
placeholder="Search"
value={searchInput}
onChange={(e)=>{ 
    setSearchInput(e.target.value)
   
}}
/>
<button 
className="search-btn px-4 bg-green-400 m-4 rounded-lg"
onClick={()=>{

   const data= filterData(searchInput,allRestaurants)
   
   setFilterRestaurants(data)
   //console.log(data+"mw")
}}
>
  Search
</button>

<button 
className="px-4 bg-green-400 m-4 rounded-lg"
onClick={()=>{
  const filteredList=allRestaurants.filter(
    (res) => res.info.avgRating > 4)
  setFilterRestaurants(filteredList)
}}      >
Top Rated restaurant
</button>
<div>

<input value={user.name} onChange={e=>setUser({
  name:e.target.value,
  email:"ddd"
})}></input>
{
/*to change email
<input value={user.email} onChange={e=>setUser({
  ...user,//here ...user using as it will not change other properties expext email
  email:e.target.vale
})}></input>


*/
 }


</div>

</div>
<div className="restuarant-list flex flex-wrap">
  
  {
     

    filterrestaurants.map((resaturant ,index )=>{


       return( <Link to={"/reastaurant/"+resaturant.info.id} key={resaturant.info.id}>
        {//if the restro is promoted then add a promoted label to it
        resaturant.info?.promoted?<RestaurantCardPromoted  {...resaturant.info}/>:  <RestroCard {...resaturant.info} /> 
        
        }
       
       </Link> 
       )
    })
     //(filterrestaurants.length === 0 ?  <h1>nothing found</h1>:"ok")
      
 }
 {
 (filterrestaurants.length===0?<h1>nothing found</h1>:"")

 }
  
{
    ////second way to  return
  
    /*
     <RestroCard {...restaurantList[0].data.data} heelow="world"/>
     <RestroCard {...restaurantList[1].data.data}/>
     <RestroCard {...restaurantList[2].data.data}/>
     <RestroCard {...restaurantList[3].data.data}/>
     <RestroCard {...restaurantList[1].data.data}/>
     <RestroCard {...restaurantList[2].data.data}/>
     <RestroCard {...restaurantList[3].data.data}/>
     <RestroCard  {...restaurantList[0].data.data}/>
     */
       }
     
       <Instamart/>
       </div>
     </>
    )}
export default Body;


