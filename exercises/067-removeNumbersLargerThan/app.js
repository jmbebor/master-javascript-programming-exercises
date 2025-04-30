let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for(let x in obj){
        if(typeof obj[x]==='number' && obj[x]>num){
            delete obj[x];
        }
    }

    return obj;
}
console.log(removeNumbersLargerThan(5, obj));
