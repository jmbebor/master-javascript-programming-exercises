function isOldEnoughToDrinkAndDrive(age) {
  if(age>=21&&age>=16){
    return true;
  }
  else{
    return false;
  }
  
}

let output = isOldEnoughToDrinkAndDrive(16);
console.log(output);
output = isOldEnoughToDrinkAndDrive(21);
console.log(output);
output = isOldEnoughToDrinkAndDrive(22);
console.log(output);