function removeStringValues(obj) {
    for(let x in obj){
        if(typeof obj[x]==='string'){
            delete obj[x];
        }
    }
    return obj;
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
