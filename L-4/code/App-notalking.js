import React from "react";
import  ReactDOM  from "react-dom/client";
import  "./App-nottalking.css"
import myImage from './images/TREE.jpg';
//////APP___1st___APP____FOOD__VILA
  

const Title = () => {
  return( 
    <a href="/" >
<img className="img-logo" alt="logo" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"/>
</a>
   )
      


    
};

const HeaderComponent=()=>{
    return(
        <div className="header">
            <Title/>    
            <div className="nav-items">
             <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
           <li>Cart</li>


             </ul>
  

            </div>
            
            
               </div>
    )
}

const burgerKingh={
  name:"Burger Kingh",
  image:myImage,
  cusines:["Burger","Americans"],
  rating:"4.2"
}




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



////FINALLY THE BEST WAY TO WRITE--


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



const Body=()=>(
  <div className="restuarant-list">

{
  restaurantList.map((resaturant ,index )=>{
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
)






const Footer=()=>(
  <h4>this</h4>
)

  { //<React.Fragment></React.Fragment> same as <> </>
}
const AppLayout=()=>{

  return(
    
<> 
<HeaderComponent/>
<Body/>
<Footer/>

</>
  )
}


//config driven UI


const restaurantList=[
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "209596",
        "name": "Anand Bakery",
        "uuid": "e291ae69-41d3-41b5-b472-d384f8939c35",
        "city": "16",
        "area": "Sitabuldi",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "w4xmtbnehwmvvigzo7bq",
        "cuisines": [
          "Bakery",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 0.5,
        "slugs": {
          "restaurant": "anand-bakery-sitabuldi-sitabuldi",
          "city": "nagpur"
        },
        "cityState": "16",
        "address": "Main Road, Sitabuldi, Nagpur,Sitabuldi,Nagpur",
        "locality": "",
        "parentId": 32702,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "209596",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 0.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "543927",
        "name": "The Roll Factory",
        "uuid": "272c4174-0fd3-4222-b911-49e49b06a01f",
        "city": "16",
        "area": "Ayodhya Nagar",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "j9omyeyfwnjlo60vfci4",
        "cuisines": [
          "Chinese",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "slaString": "33 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "nitin-janardhanrao-bonde-ayodhya-nagar-ayodhya-nagar",
          "city": "nagpur"
        },
        "cityState": "16",
        "address": "36, MAHALAXMI NAGAR NO. 2,  MANEWADA ROAD, NAGPUR, Nagpur  Muncipal Corporation Zone 03  Hanumannagar, Nagpur, Maharashtra -  440024",
        "locality": "Mahalaxmi Nagar",
        "parentId": 2298,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6247984~p=25~eid=00000187-1863-3d5c-39ad-645300601928",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "543927",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "270186",
        "name": "Corridor Seven Coffee Roasters",
        "uuid": "0ae80ffd-aba5-48e3-b67b-312f317c2c4c",
        "city": "16",
        "area": "Sitabuldi",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "bwj2cxzscbfymyiscc04",
        "cuisines": [
          "Continental",
          "Salads",
          "Healthy Food",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "corridor-seven-coffee-roasters-sitabuldi-sitabuldi",
          "city": "nagpur"
        },
        "cityState": "16",
        "address": "86, Mahajan Market, Behind Ketkar Hospital, Sitabuldi, Nagpur 440012, District - Nagpur-1, STATE - Maharashtra -  440012",
        "locality": "Wardha Road",
        "parentId": 65299,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "270186",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "56274",
        "name": "Ghugre Nasta Point",
        "uuid": "f8110a1f-3bcf-475d-8ab3-1fe06804862a",
        "city": "16",
        "area": "Sitabuldi",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "bofjce9s9jbppwdppkyp",
        "cuisines": [
          "Fast Food",
          "Street Food",
          "Snacks",
          "Sweets"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
          "restaurant": "ghugare-nasta-point-sitabuldi-sitabuldi",
          "city": "nagpur"
        },
        "cityState": "16",
        "address": "Mahajan Market, Near Apna Bazar, Sitabuldi, Nagpur",
        "locality": "Tekdi Road",
        "parentId": 4840,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off up to ₹40 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "56274",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 0.800000011920929,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },












]











const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(AppLayout())