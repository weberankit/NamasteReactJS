
import { restaurantList } from "./constant";
import RestroCard from "./RestroCard";
import { useState } from "react";


////function for filter reastaurantlist according to searchInput
function filterData(searchInput ,resaturants){
  const filterData=resaturants.filter((restaurant) =>
  restaurant?.data?.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
   return filterData;
}



 const Body=()=>{
    //searchState is a local state variable ---usestate
    const[searchInput , setSearchInput]=useState("");
    ////here we render restaurantlist using state variable as 
    ////for filter and updating dom
    const [restaurants ,setRestaurants] = useState(restaurantList);
 
     
    return(

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

   const data= filterData(searchInput,restaurants)
   
   setRestaurants(data)
}}
>
  Search
  </button>




</div>
<div className="restuarant-list">
  
  {

    restaurants.map((resaturant ,index )=>{
       return <RestroCard {...resaturant.data.data}  key={resaturant.data.data.id}/> //returning jsx
       
    })
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


