import { useState, useContext } from 'react';
//import { useEffect } from 'react';
import {Link} from "react-router-dom";
import useOnlineStatus from './utils/useOnlineStatus';
//import myImage from './images/TREE.jpg';
import UserContext from './utils/UserContext';
const loggedinUser=()=>{
  //api to check authentication
  return false;
}


const HeaderComponent=()=>{
     const onlineStatus=useOnlineStatus()
     const [isLoggedin,setLogged]=useState(false)
    
     const {user}=useContext(UserContext);

/*
      useEffect(()=>{
         console.log("I am useeffect")
      },[]);
      console.log("render")
*/
console.log(user)
        return(
            <div className="flex justify-between p-7 bg-pink-300 shadow-lg items-center">
                 
                <div className="nav-items">
                 <ul className='flex p-4 m-4 '>
              
                <li >online status:{onlineStatus?'green':'red'}</li>

              <Link to ="/">
               <li className='px-4' >Home</li>
               </Link>

              <Link to ="/about">
               <li className='px-4'>About</li>
              </Link>
               <Link to ="/contact">
               <li className='px-4'>Contact</li>
               </Link>
               <Link to ="/grocery">
               <li className='px-4'>Grocery</li>
               </Link>
               <li className='px-4'>Cart</li>
    
    
                 </ul>
      
    
                </div>
                <div>
                <span>{user.name}</span>  
                 {
                  isLoggedin?( <button onClick={()=>setLogged(false)}>logout</button>)
                  :( <button onClick={()=>setLogged(true)}>login</button>)
                 }
                </div>
                   </div>
        )
    }



    const Title = () => {
      const[title,setTitle]=useState("Food")

        return( 
          <>
          <a href="/" >
      <img className="img-logo" alt="logo" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"/>
      </a>
    
   
    
      </>
         )
            
      
      
          
      };
    export default HeaderComponent;




