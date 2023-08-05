alert('Enter Two Numbers');

let a=Number( prompt('enter first number',)); //asking number to enter and converting  its data type string into number "Number"
console.log('a='+a);
console.log('a is',typeof a);

let b=Number(prompt('enter second number')); //asking number to enter and converting  its data type string into number "Number"
console.log('b='+b);
console.log('b is',typeof b)

let result;

let c=Number(prompt('Choose arithmatic Operation 1=+ 2=- 3=* 4=/ 5=Exponentiation'));
console.log(typeof c)
console.log('c='+c);

  switch(c){
    case 1:
      alert('You chose Addition')  
      result=a+b;
      console.log('Result='+result);
      break;
    case 2:
      alert('You chose Subtraction') 
      result=a-b;
      console.log('Result='+result);
      break;
    case 3: 
      alert('You Chose Multipliaction')  
      result=a*b;
      break;
    case 4:
      alert('You Chose Division')  
      result=a/b; 
      break;   
    case 5:
      alert('You Chose Exponentiation')  
      result=a**b;
      break;
    default:alert('you entered a wrong key')
  }
  alert('your result is '+result)

  