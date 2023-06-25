
import { restaurantList } from "./constant";
import RestroCard from "./RestroCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

console.log("ji")
////function for filter reastaurantlist according to searchInput
function filterData(searchInput ,resaturants){
  const filterData=resaturants.filter((restaurant) =>
  restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
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
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  setFilterRestaurants(json?.data?.cards[2]?.data?.data?.cards)//this is for the first time show as because
//in map we are using filterResaurant which initially empty so here we providing api data to the filterrestaurant 
//so that initially it will show it 

}




//not render component early return
   if(!allRestaurants) return null;
   //if(filterrestaurants?.length === 0 ) return <h1>nothing found</h1>


    return (allRestaurants.length === 0 ) ? <Shimmer/>:(

<>
<div className="search-container">
<input type="text" 
className="search-input" 
placeholder="Search"
value={searchInput}
onChange={(e)=>{ 
    setSearchInput(e.target.value)
   
}}
/>
<button 
className="search-btn"
onClick={()=>{

   const data= filterData(searchInput,allRestaurants)
   
   setFilterRestaurants(data)
}}
>
  Search
  </button>




</div>
<div className="restuarant-list">
  
  {
     

    filterrestaurants.map((resaturant ,index )=>{


       return <RestroCard {...resaturant.data}  key={resaturant.data.id}/> //returning jsx
       
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
     
    
       </div>
     </>
    )}
export default Body;


