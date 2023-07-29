import { useState } from "react";

const Section=({title,desc,isVisible,setIsVisible})=>{
   // const [isVisible,setIsVisible]=useState(false)
    return(
        <div className="bg-slate-600 border border-fuchsia" > 
        <h1>{title}</h1>
      
       
        {
        isVisible ?(<button onClick={()=>setIsVisible(false)}>Hide</button>):(
           <button onClick={()=>setIsVisible(true)}>Show</button> 
        )}



 {//isVisible && <p>{desc}</p> or   isVisible==true?desc:"" same
        }
        
        {isVisible && <p>{desc}</p>}
        
        </div>
    )
}


//If the condition visibleSection === "about" is true, the expression
// isVisible will be assigned the value true. Otherwise, it will be assigned the value false.

const Instamart=()=>{
    const [visibleSection ,setVisibleSection]=useState("about")
    return(
      <div>
        <h1>instamart</h1>
        <Section title={"About "} desc={"this is my about section"} isVisible={visibleSection === "about"} setIsVisible={()=>{
          setVisibleSection("about")
        }}/>
        <Section title={"team "} desc={"this is about team section"}  isVisible={visibleSection === "team"} setIsVisible={()=>{
          setVisibleSection("team")
        }}/>
        <Section title={"man "} desc={"this is about a man in world"} isVisible={visibleSection === "man"} setIsVisible={()=>{
          setVisibleSection("man")
        }}/>
      </div>
    )
}
export default Instamart;