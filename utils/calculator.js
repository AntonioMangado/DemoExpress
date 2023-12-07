const calculator = {
    add: (a, b)=>{
        if (typeof a == "number" && typeof b == "number") {
            return a+b
        } else {
            return NaN
        }
        
    },
    sub: (a, b)=>{
        if (typeof a == "number" && typeof b == "number") {
            return a-b
        } else {
            return NaN
        }
    },
    div: (a, b)=>{return a/b},
    mul: (a, b)=>{
        if (typeof a != "number" || typeof b != "number") {
            return NaN
        } else if (typeof a == undefined || typeof b == undefined){
            return null
        } else {
            return a*b
        }
    }
}

module.exports = calculator;

console.log(calculator.add(4,7));
console.log(calculator.sub(4,7));
console.log(calculator.div(4,7));
console.log(calculator.mul(4,7));