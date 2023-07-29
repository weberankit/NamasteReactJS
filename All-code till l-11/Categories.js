import Itemlist from "./Itemlist";
import {useState} from "react";
const Categories=({data ,showItem,setShowIndex})=>{
    console.log(data)
    const handleClick=()=>{
        console.log("1")
        setShowIndex()
       }
    
   // const[showItem , setShowItem]=useState(false)
  /* const handleClick=()=>{
    console.log("clicked")
    //toggle if it(showItem) is true then make it false and if  not true then make it false;
    setShowItem(!showItem)
   }*/

    return(
   <>
   
   <div onClick={handleClick}>
  <p ><b> {data.title}- {data.itemCards.length}</b> </p>

       {/*   accordium body*/}
   {
    //if showitem is true then show item list othen than nothing
  showItem && <Itemlist items={data.itemCards}/>

}
   </div>

   </>
    )
}
export default Categories;

/*accordium without automatic closing featurs
import Itemlist from "./Itemlist";
import {useState} from "react";
const Categories=({data})=>{
    console.log(data)
    const[showItem , setShowItem]=useState(false)
   const handleClick=()=>{
    console.log("clicked")
    //toggle if it(showItem) is true then make it false and if  not true then make it false;
    setShowItem(!showItem)
   }

    return(
   <>
   
   <div onClick={handleClick}>
  <p ><b> {data.title}- {data.itemCards.length}</b> </p>

       {
        / // accordium body
    }
       {
        //if showitem is true then show item list othen than nothing
      showItem && <Itemlist items={data.itemCards}/>
    
    }
       </div>
    
       </>
        )
    }
    export default Categories; */