
//WARNING:---do not delete very important concept


{
/*

import { fireEvent, render,screen  } from "@testing-library/react";
//import ItemList from "../ItemList";
import Body from "../Body";
//import printName from "./fetchBodycheck";
import Mock_Data from "../mocks/restlistmock.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

//check copy explained well
//basically creating mock fetch for test-dom 
global.fetch=jest.fn(()=>{
  return Promise.resolve({
    json:()=>{
        return Promise.resolve(Mock_Data)
    }
  })
})
//uses async as beacuse awit used with act and it take onother async function which  render
it ("render bodycomponent with search and render lsit with burger value in search fiels",async()=>{

  await act(async()=> render(
  <BrowserRouter>
  
     <Body/>
   
   </BrowserRouter>
  ))
//checking all card befor search
const cardsBeforeSearch=screen.getAllByTestId("rescard")
expect(cardsBeforeSearch.length).toBe(20)//20 is no of cars on page



 const searchBtn=screen.getByRole("button",{name:"search"})
 const searchInput=screen.getByTestId("searchInput")
//now input value change and for e which is given by browser here mocking value as we are using test dom
//as we provide value by this firevent
fireEvent.change(searchInput,{target:{value:"burger"}})

//now on click search button
fireEvent.click(searchBtn)


//now after click it should load 4 restro list let check::;
const cardsAfterSearch= screen.getAllByTestId("rescard")

 //expect(searchBtn).toBeInTheDocument()

expect(cardsAfterSearch.length).toBe(4) 


 

})


it ("should be top rated testro list",async()=>{

  await act(async()=> render(
  <BrowserRouter>
  
     <Body/>
   
   </BrowserRouter>
  ))
const cardsBeforfilter=screen.getAllByTestId("rescard")
expect(cardsBeforfilter.length).toBe(20)
const sortBtton=screen.getByRole("button",{name:"Top Rated Restraunts"})
fireEvent.click(sortBtton)
const cardsAfterFilter=screen.getAllByTestId("rescard")
expect(cardsAfterFilter.length).toBe(13)

 

})
*/
}
