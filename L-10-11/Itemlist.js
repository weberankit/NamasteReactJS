
import { useDispatch } from "react-redux";
import {addItem} from "./utils/cartSlice";

const Itemlist=({items})=>{
    console.log(items,"ojjj")
const dispatch=useDispatch();
    return(
<>
<div >

{items.map((item)=>{
    return(
    <>  
    <div  key={item.card.info.id}  style={{backgroundColor: "pink"}}>
        <div><button onClick={()=>{
            //dispatch action
           //dispatch(addItem("pizza"))
           dispatch(addItem(item))

        }}>Add</button></div>
<div>{item.card.info.name}</div>
<h6>{item.card.info.description}</h6>
    </div>
    </>  
    
    )
})}

   
</div>
</>
    )
}


export default Itemlist;