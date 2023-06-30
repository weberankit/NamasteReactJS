import React from "react";
class Profile extends React.Component{
constructor(props){
    super(props);
    //create state
    this.state={
        count:0,
        count2:0,
    }
    console.log("constructor")
}




render(){
console.log("render")
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
    </div> 
}
}

export default Profile;