import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartSlice';//name i think import deafault cartslide.reducer
 const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        //if we have one another reducer of other slice
        //user:userReducer
    }
 });
 export default appStore;
