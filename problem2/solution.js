function reverseBeforeAndRemoveI(input) {
    let output = '';
    input.split('').forEach(char => {
        if(char === 'i'){
            output = output.split('').reverse().join('');
        }
        else{
            output += char;
        }
    })
    return output;
}

console.log("solution is : ", reverseBeforeAndRemoveI("codingisfun"))