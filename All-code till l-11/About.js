
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
//we can also use this instead ofimport router and render outlet by using below one
//import Profile from "./Profile";
//<Profile/>

//now classy
import Profile from "./Profileclass";

import {Component} from "react";

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
        <About2/>
    </div>
)
}

//we can also write 
//class About2 extends Component but for that use import {component} from "r
 class About2 extends Component{
constructor(props){
    super(props);
   console.log("construcutor")
   this.state={
    userInfo:{
        //therse are initial values
        name:"Dummy kingh",
        location:"anything",
    }
   }
}
//we can do asyn with componenetididmout but not with useeffect
async  componentDidMount(){
 //api call
    console.log("componentDidmout")


    const data=await fetch("https://api.github.com/users/weberankit")
     const json=await data.json();
     this.setState({
        userInfo:json,
     })
     console.log(json)
}



render(){ 
    console.log("render")
    return(
<div>
    <h1>this is abutclassy and its above is functiona; comp</h1>
    <p>{this.state.userInfo.name}{this.state.userInfo.location}</p>
</div>)
}
}


export default About;