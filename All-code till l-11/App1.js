import React from "react";
import  ReactDOM  from "react-dom/client";


const heading=React.createElement("h1",{
    id:"name"
},"Hi Iye")
const heading2=React.createElement("h2",{

},heading)

const container=React.createElement("div",{
    id:"singh"
},heading2)


//we can also use this
const container2=React.createElement("div",{
    id:"singhi"
},[
React.createElement("div",{
        id:"names"
    },"Hi Iyes") ,
    React.createElement("h1",{
        id:"fames"
    },"Hi Iyes") 


])
//practice 
const greeting=<h1>Hi I am ANkit</h1>;
const rajkumar=<h1>Hi I am{8-3} ANkit `${5-5}`</h1>;


const myapplw=(
<ul>
<li>
    {1}
</li>

<li>this 1 is belongs to me</li>
</ul>


)


const material=(
<div>
<p>this i s my</p>
<p>this </p>
 {rendering()}
</div>
)


const material2=(
<>
{6 +5}
<div className="ankit">
    <p>this is not relatable to me</p>
</div>
</>
)

////component as function in js

function list(){
    return(
        <>
        <h1>Hi I am ANkit</h1>
        
        </>
    )
}
const count=3
const List4=()=>{
    return(
        <h2>
        <p>thi si ,e</p>
        {count}
        </h2>
        )

}
let list2=()=>(
    <h1>this is singh vi;;a</h1>
)






function rendering(){
  const obj={
    color:"red",
    backGround:"pink"
  }

return(
    <>
    <p style={obj}>yak</p>
    {greeting}
      <List4/>
      {List4()}
    </>
)



}






const root=ReactDOM.createRoot(document.getElementById("jsx"))

root.render(rendering())









