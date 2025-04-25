function checkAge(name, age) {
let allowed="";

  if(age>=21){
    allowed= `Welcome, ${name}!`;
  }
  else{
    allowed= `Go home, ${name}!`;
  }
  return allowed;
}

let output=checkAge("jose", 20);

console.log(output);

output=checkAge("jose", 21);

console.log(output);