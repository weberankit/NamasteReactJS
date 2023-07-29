import React from "react";
import UserContext from "./utils/UserContext";

class Profile extends React.Component{
constructor(props){
    super(props);
    //create state
    this.state={
        count:0,
        count2:0,
    }
    console.log("parent-constructor")
}

//useeffect
//when we will visit page it will trigger
 /*componentDidMount(){
    console.log("parent- componentdidimount")
    //ApI call
  this.timer=setInterval(()=>{
 console.log("namaate")
  },1000)





}
//this willl trigger when we leave page
componentWillUnmount(){
    this.timer=setInterval(()=>{
        console.log("namaste react")
    },1000)
}
*/
render(){
console.log("parent-render")
    return <div>
        <h1>this is classy</h1>
    {this.props.name}
    {this.state.count}
    <button onClick={()=>{
        this.setState({
            count:1,
        })
    }}>

    </button>


<UserContext.Consumer>
    {(value)=><h1>{value.name}</h1>}
</UserContext.Consumer>
    </div> 
}
}

export default Profile;