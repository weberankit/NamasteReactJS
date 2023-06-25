
import "./App-nottalking.css"
import "./shimmer.css"

const Shimmer=()=>{
 //create 10 element array 
 //1st method
 /*
  const array= new Array(10).fill(1)
  console.log(array)

*/
//second-method
const layoutFoodItem= Array.from({length:10}).map((item,index)=>{
       return <div key={index} className="card food-item" ><div className="img"></div></div>


})

    return(
        <>
     <div className="restuarant-list">
     {layoutFoodItem
}


     </div>

        </>
    )
}
export default Shimmer;