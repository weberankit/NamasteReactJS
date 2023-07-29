import { useContext } from "react";
import { IMG_CDN_URL } from "./constant";
import UserContext from "./utils/UserContext";
{
/*
const RestroCard=(props)=>{
  console.log(props)
  return(
  <div className="card">
    <img  src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
  + props.restaurant.data.data?.cloudinaryImageId }/>
    <h2>{props.restaurant.data.data?.name}</h2>
    <h3>{props.restaurant.data.data?.cuisines.join(" ,")}</h3>
     <h4>{props.restaurant.data.data?.avgRating}</h4>
  </div>


  )
}
*/
//destructuring - to write less code
/*
const RestroCard = ({restaurant}) => {
  const {name,cuisines,cloudinaryImageId,avgRating} = restaurant.data.data;
  return(
  <div className="card">
    <img  src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
  + cloudinaryImageId }/>
    <h2>{name}</h2>
    <h3>{cuisines.join(" ,")}</h3>
     <h4>{avgRating}</h4>
  </div>


  )
}

*/
//3rd way to write--resaturant be like
/*
const RestroCard = ({name ,cuisines ,cloudinaryImageId ,avgRating}) => {

  return(
  <div className="card">
    <img  src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
  + cloudinaryImageId }/>
    <h2>{name}</h2>
    <h3>{cuisines.join(" ,")}</h3>
     <h4>{avgRating}</h4>
  </div>


  )
}
*/

//passing props--properties--normal parameter function
//{RestroCard(restaurantList[2])}


//for 1st and 2nd -method
/*
const Body=()=>(
  <div className="restuarant-list">
   <RestroCard restaurant={restaurantList[0]} heelow="world"/>
   <RestroCard restaurant={restaurantList[1]}/>
   <RestroCard restaurant={restaurantList[2]}/>
   <RestroCard restaurant={restaurantList[3]}/>
   <RestroCard restaurant={restaurantList[0]}/>
   <RestroCard restaurant={restaurantList[1]}/>
   <RestroCard restaurant={restaurantList[2]}/>
   <RestroCard restaurant={restaurantList[3]}/>
 
   
  
 </div>
)*/
//for third method body be like--
/*
const Body=()=>(
 <div className="restuarant-list">
  <RestroCard name={
    restaurantList[0].data.data.name}
     cuisines={restaurantList[0].data.data.cuisines}
     cloudinaryImageId={restaurantList[0].data.data.cloudinaryImageId}
     avgRating={restaurantList[0].data.data.avgRating}
     
     
     />
  {/* 
  <RestroCard restaurant={restaurantList[1].data.data}/>
  <RestroCard restaurant={restaurantList[2].data.data}/>
  <RestroCard restaurant={restaurantList[3].data.data}/>
  <RestroCard restaurant={restaurantList[0].data.data}/>
  <RestroCard restaurant={restaurantList[1].data.data}/>
  <RestroCard restaurant={restaurantList[2].data.data}/>
  <RestroCard restaurant={restaurantList[3].data.data}/>
/*
}
  
 
</div>


)*/
}
////FINALLY THE BEST WAY TO WRITE--


  const RestroCard = ({name ,cuisines ,cloudinaryImageId ,avgRating}) => {
const {user} =useContext(UserContext)

    return(
    <div className="card m-4 p-4  w-[250px] bg-pink-50 sm:bg-slate-500">
      <img className="w-60 rounded-lg"  src={IMG_CDN_URL
    + cloudinaryImageId }/>
      <h2 className="font-bold p-1">{name }</h2>
      <h3>{cuisines.join(" ,")}</h3>
       <h4>{avgRating}</h4>
       <h5>{user.name}</h5>
    {console.log(user.email)}
       <h5>{user.email}</h5>
    </div>

        
  
    )
  }
//higher order restaurant
//input-restrocard => restrocardpromoted
  export const withPromtedLabel=(RestroCard)=>{
    return (props)=>{
      return(
        <div>
          <label>Promoted</label>
          <RestroCard {...props}/>
        </div>
      )
    }
  }
  


  export default RestroCard;