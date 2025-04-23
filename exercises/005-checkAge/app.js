function checkAge(name, age) {
  if(age>=21){
    return 'Welcome, ${name}!';
  }
  else{
    return 'Go home, ${name}!';
  }
  
}

let output=checkAge("jose", 21);

console.log(output);