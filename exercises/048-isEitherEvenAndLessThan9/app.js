function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    if(num1%2==0||num2%2==0){
        if(num1<9&&num2<9){
            return true;
        }
        else return false;
    }
    else return false;

}

let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
output = isEitherEvenAndLessThan9(72, 2);
console.log(output); // --> false