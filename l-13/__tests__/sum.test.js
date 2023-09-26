import { sum } from "../sum"

/**/
test("run test for sum ",()=>{
const result= sum(3,4);
//Assertion
expect(result).toBe(7);
//exect(result).toBe(5)  fail test
})

