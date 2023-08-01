import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
   name:"cart",
   initialState:{
    items:["burger","pizza"]
   },
   reducers:{
    addItem:(state,action)=>{
        //mutating  state here
        state.items.push(action.payload);
    },
    removeItem:(state , action)=>{
       state.items.pop()
    },
 
   clearCart:(state , action)=>{
    state.items.length=0;
   }


   }


})

export const{addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer;