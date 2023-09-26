import About from "../About";
import {render , screen} from "@testing-library/react";
import "@testing-library/jest-dom"


test("should heading is is about  page",()=>{
    render(<About/>);
const heading= screen.getByRole("heading");
expect(heading).toBeInTheDocument();


})



test("should button is in page ",()=>{
    render(<About/>);
//const button= screen.getByRole("button");
//other way  find text on screen 
const button = screen.getByText("Submit");
expect(button).toBeInTheDocument();

})
/**/
describe("grouping multiple test",()=>{
test("should two input boxes",()=>{
    render(<About/>)

const inputBoxes = screen.getAllByRole("textbox")
//console.log(inputBoxes[0])
//assertion
expect(inputBoxes.length).toBe(2);
})
})


it("should two input boxes",()=>{})
