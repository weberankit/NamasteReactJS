
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
//we can also use this instead ofimport router and render outlet by using below one
//import Profile from "./Profile";
//<Profile/>

//now classy
import Profile from "./Profileclass";


const  About=()=>{
return(
    <div>
        <h1>
            About us 
        </h1>
        <p>
            This is react course
        </p>
        <Profile name="props in class"/>
        <Outlet/>
    </div>
)
}

export default About;