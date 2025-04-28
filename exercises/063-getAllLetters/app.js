function getAllLetters(str) {
    // your code here
    let word=[];
    for(let i=0;i<str.length;i++){
        word[i]=str[i];
    }
    return word;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
