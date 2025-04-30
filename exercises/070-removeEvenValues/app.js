function removeEvenValues(obj) {
    // your code here
    for(let x in obj){
      if(typeof obj[x]==='number'){
        if(obj[x]%2==0){
          delete obj[x];
        }
      }
    }
    return obj;
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
