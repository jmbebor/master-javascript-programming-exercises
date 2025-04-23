function isOldEnoughToVote(age) {
  if(age>=18){
    return true;
  }
  else{
    return false;
  }
  
}

let output=isOldEnoughToVote(18);
console.log(output);
output=isOldEnoughToVote(19);
console.log(output);
output=isOldEnoughToVote(17);
console.log(output);