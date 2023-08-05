alert("choose arith amtic operation")
let opp=prompt("enter arithmetic opearation")
let a=Number(prompt('enter first number'))
console.log('a ='+a)
let b=Number(prompt('enter second number'))
console.log('b ='+b)
let result;
console.log('opp is',typeof opp)
 if(opp=='+'){
    result=a+b;
 }
 else if(opp=="-"){
    result=a-b;
 }
 else if(opp=="*"){
    result =a*b;
 }
 else if(opp=="/"){
    result=a/b;
 }
 else {
    alert(" your entered wrong key")
 }
 console.log(result)
 alert("result is="+result)
  