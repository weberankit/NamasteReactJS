import React, { lazy,Suspense,useEffect,useState} from "react";
import  ReactDOM  from "react-dom/client";
import  "./index.css"
//import myImage from './images/TREE.jpg';
import  HeaderComponent  from "./Header";
import Body from "./Body"
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import RestaurantMenu from "./RestrauntMenu";
import Profile from "./Profile";
import UserContext from "./utils/UserContext";

//import Grocery from "./Grocery";
////export everything
//import * as xyz from "./Header";

//////import deault and other
//import Heading, { Title} from "./Header";
//////APP___1st___APP____FOOD__VILA
  




const burgerKingh={
  name:"Burger Kingh",
  //image:myImage,
  cusines:["Burger","Americans"],
  rating:"4.2"
}




const Grocery=lazy(()=>import("./Grocery"))



  { //<React.Fragment></React.Fragment> same as <> </>
}
const AppLayout=()=>{


 //const [user ,setUser]=useState({
  //name:"Ankit",
  //email:"@gmail.com"
 //})

 const [user , setUser]=useState({
  name: "Ankit",
  email: "@gmail.com"
});

useEffect(()=>{
 //make api call and send userName and password

//if it is valid user
const data={
  name:"Ankit singh",
  email: "ankit@gmail.com"
}
setUser(data);
},[]);



  return(
    
<>
{
  //we arap inside usercontext so that this user value will be shown everywhere which is wrapped inside
  //now updated user value will be shown everywhere
  //now to update when we change input value we sen our setUser function 
  // basically extract setUser
}
<UserContext.Provider value={{ user:user , setUser}}>
{////<xyz.Heading/>
          }
<HeaderComponent/>
{/*                                                       
<About/>
<Body/>
<Contact/>*/
//this oulet is basically done so that one can move any section for ex about page and it will also 
//have header and footer
}
 <Outlet/> 
<Footer/>
</UserContext.Provider> 
</>
  )
}



//created below applaout so that it will run as to maintain sequences
const appRouter = createBrowserRouter([
  //creating configuiration defining what happen when slash loaded
  //chilldren created
{
   path:"/",
   element:<AppLayout/>,
   errorElement:<Error/>,
children:[

    {path:"/",
     element:<Body/>,             
    },

{path:"/about",//it also works 
     element:<About/>,  
     children:[{
         path:"profile",//localjost:1234/about/profile
         //no need to use /profile otherwise react consider it localhost:1234/profile 
         element:<Profile/>,

     }],           
    },

    {
      path:"/contact",
      element:<Contact/>,
    }, 
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense>,
    },
    
    { 
      path:"/reastaurant/:resId", //here uses : this indicate that data is dynamic
      element:<RestaurantMenu/>,
    },
   ], 
  },
  /*
  //creating path about to be load and element goingto be loaded
  {
    path:"/about",
    element:<About/>
  }
  */
])


//config driven UI











   
const root=ReactDOM.createRoot(document.getElementById("root"))
//root.render(AppLayout())
root.render(<RouterProvider router={appRouter}/>)
