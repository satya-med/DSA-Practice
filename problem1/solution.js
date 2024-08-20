
const findMaxWithNegative = (arr) => {
    const positiveNumbers = arr.filter(el => el > 0);
    const negativeNumbers = arr.filter(el => el < 0);
    if(positiveNumbers.length === 0 || negativeNumbers.length === 0) return null;
    const intersection = positiveNumbers.filter(el => negativeNumbers.includes(el * -1));
    return Math.max(...intersection);
}

const arr = [-1, 1, -2, 2, -3, -4];

console.log("solution is : ", findMaxWithNegative(arr));