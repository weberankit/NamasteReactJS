/*
import { useEffect,useState } from "react";
import { Menu_Api_Url } from "../constant";
 const useRestaurantMenu=(resId)=>{
    const {resInfo,setResInfo}=useState(null);
    
    //fetcjdata

useEffect(()=>{
    fetchData()
},[]);
const fetchData=async()=>{
    const data=await fetch( Menu_Api_Url + resId);

    const json=await data.json();
    setResInfo(json.data)
    console.log(json)
}
return resInfo;
    
}
export default useRestaurantMenu;
*/


import { useEffect, useState } from "react";
import { Menu_Api_Url } from "../constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(Menu_Api_Url + resId);
      const json = await data.json();
      setResInfo(json.data);
      console.log(json);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
