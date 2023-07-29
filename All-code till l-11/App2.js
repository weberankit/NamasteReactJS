import React from"react";
import ReactDom from "react-dom/client";
import "./style.css"
//import myImage from './images/TREE.jpg';

const Header=()=>{
    return(
    <div className="container">
        <div className="logo">
          { // <img className="img" src={myImage}/>
}

        </div>
            
        <div className="searchBar"> 
            <input type="text"placeholder="YOUR NAME"/> 
        </div>
       
        
           
        <div className="userlogo"> 
           <img className="img" src={myImage}/> 
        </div>



    </div>
    )
}

const Header2=(
   
    <div className="container">
        <div className="logo">
            <img className="img" src={myImage}/>
     

        </div>
            
        <div className="searchBar"> 
            <input type="text"placeholder="YOUR NAME"/> 
        </div>
       
        
           
        <thirdLogo/>



    </div>
    
)


const Firstlogo=()=>{
    return(
        <div className="logo">
        <img className="img" src={myImage}/>
 

    </div>

    )
}




const Header3=()=>{
    return(
        <div className="container">
       <Firstlogo/>
        <div className="searchBar"> 
            <input type="text"placeholder="YOUR NAME"/> 
        </div>
        {thirdLogo()}

       </div>
    )
}







let thirdLogo=()=>(
    <div className="userlogo"> 
           <img className="img" src={myImage}/> 
        </div>
)


const root=ReactDom.createRoot(document.getElementById("heading"))
root.render(<Header3/>)
