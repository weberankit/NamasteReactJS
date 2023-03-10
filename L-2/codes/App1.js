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












const root=ReactDOM.createRoot(document.getElementById("jsx"))

root.render(container2)









