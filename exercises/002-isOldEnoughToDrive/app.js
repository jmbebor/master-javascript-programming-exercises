function isOldEnoughToDrive(age) {
  if(age>=16){
    return true;
  }
  else{
    return false;
  }
}

let output= isOldEnoughToDrive(16);
console.log(output);
output= isOldEnoughToDrive(17);
console.log(output);
output= isOldEnoughToDrive(15);
console.log(output);


