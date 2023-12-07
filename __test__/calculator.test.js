const {add, sub, div, mul} = require("../utils/calculator")

describe("Describe calculator functionalities", ()=>{
    describe("Adding numbers. Test add() function", ()=>{
        test("Adding 1+1 equals 2", ()=>{
            expect(add(1,1)).toBe(2);
        })
    
        test('Adding 1+"1" equals NaN', ()=>{
            expect(add(1,"1")).toBe(NaN);
        })
    
        test('Adding without parameters equals NaN', ()=>{
            expect(add()).toBe(NaN);
        })
    })
    
    describe("Multiplying numbers. Test mul() function", ()=>{
        test("Multiplying 1*1 equals 1", ()=>{
            expect(mul(1,1)).toBe(1);
        })
    
        test('Multiplying 1*"1" equals NaN', ()=>{
            expect(mul(1,"1")).toBe(NaN);
        })
    })
})
