// Write your function here
function computeAverageOfNumbers(array){
    
    let sum=0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }

    return sum/array.length;
}


let input = [1, 2, 3, 4, 5];
let output = computeAverageOfNumbers(input);
console.log(output);