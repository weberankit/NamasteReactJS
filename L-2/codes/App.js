
import React from "react";
import  ReactDOM  from "react-dom/client";


const heading=React.createElement("h1",{
    id:"title",////even this is also going to be replaccedd
  id:"singh",
  ////hellow:"world"////we can also pass this attriubte in react it is called props
////style:{}
////null
className:"ee",
},"Hi this is my first project");

console.log(heading)////react is just basically(plain js) object that this will show
console.log(heading.props.children)//Hi this is first

const heading2=React.createElement("h2",{
  id:"subtitle"
},"heading2-is not want to say anything");


const container=React.createElement("div",{
    id:"container"
},[heading,heading2]);

const biggestConainer=React.createElement("div",{id:"biggest-container"},container)


////this above is totally hard to write so now jsx comes to the party hahahaha!






const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(biggestConainer)