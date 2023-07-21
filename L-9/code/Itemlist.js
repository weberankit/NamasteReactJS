const Itemlist=({items})=>{
    console.log(items,"ojjj")

    return(
<>
<div >

{items.map((item)=>{
    return(
    <>  
    <div key={item.card.info.id} style={{backgroundColor: "pink"}}>
        <div><button>Add</button></div>
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