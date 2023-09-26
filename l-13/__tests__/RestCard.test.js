import Mock_Data from "../mocks/rescardMock.json"
import Restro from "../Restro"
import "@testing-library/jest-dom"
import { render,screen } from "@testing-library/react"
it("should load props",()=>{

render(<Restro resData={Mock_Data}/>)
//render(<Restro {...Mock_Data}/>)
   const name=screen.getByText("Kandoi Haribhai Damodar Mithaiwala")

   //Assertion
   expect(name).toBeInTheDocument()
   
})