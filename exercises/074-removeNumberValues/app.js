function removeNumberValues(obj) {
    // your code here
    for(let x in obj){
        if(typeof obj[x]==='number'){
            delete obj[x];
        }
    }

    return obj;
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
