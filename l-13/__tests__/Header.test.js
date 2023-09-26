import {screen, render,fireEvent } from "@testing-library/react";
import Header from "../Header"
import { Provider } from "react-redux";
import myAppStore from "../../utils/myappStorage";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

describe("all test grouped togther",()=>{

//run before all test
beforeAll(()=>{
   // console.log("gi")
})
//run before each test
beforeEach(()=>{
   // console.log("gi")
})
//run after all
afterAll(()=>{
    //console.log("gi")
})
// run after each
afterEach(()=>{
  //  console.log("gi")
})


it("should load header",()=>{

    render(
        <BrowserRouter>
        <Provider store={myAppStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )

const search= screen.getByText("About");
//screeb.getByRole("button",{name:"login"})
expect(search).toBeInTheDocument();


})


// chceking cart no
//make sure cart string match

it("should load cart - no",()=>{
   render(
        <BrowserRouter>
        <Provider store={myAppStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    )
   //using regex as cartitem no changes
    const cartNo=screen.getByText(/Cart/)
    //Assertion
    expect(cartNo).toBeInTheDocument()
})

//test for those user click changes something likelogin becomes logout
/* this is very imp since in my header comp I dont have login so commented
it("should changes login btn to logout on click",()=>{
    render(
         <BrowserRouter>
         <Provider store={myAppStore}>
     <Header/>
     </Provider>
     </BrowserRouter>
     )
    //using fireEvent
     const login=screen.getByRole("button",{name:"login"})
    fireEvent.click(login)
    const logout=screen.getByRole("button",{name:"logout"})
     //Assertion
     expect(logout).toBeInTheDocument()
 })

*/


})