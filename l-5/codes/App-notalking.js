import React from "react";
import  ReactDOM  from "react-dom/client";
import  "./App-nottalking.css"
import myImage from './images/TREE.jpg';
import  HeaderComponent  from "./Header";
import Body from "./Body"
 import Footer from "./Footer";
////export everything
//import * as xyz from "./Header";

//////import deault and other
//import Heading, { Title} from "./Header";
//////APP___1st___APP____FOOD__VILA
  




const burgerKingh={
  name:"Burger Kingh",
  image:myImage,
  cusines:["Burger","Americans"],
  rating:"4.2"
}













  { //<React.Fragment></React.Fragment> same as <> </>
}
const AppLayout=()=>{

  return(
    
<> 
{////<xyz.Heading/>
          }
<HeaderComponent/>
<Body/>
<Footer/>

</>
  )
}


//config driven UI













const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(AppLayout())