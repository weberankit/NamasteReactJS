import { createContext } from "react";

const UserContext=createContext({
    user:{
    name:"Dummy",
    email:"dummy@gmial.com"
    }
})

export default UserContext;