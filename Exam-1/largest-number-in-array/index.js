const numbers = [5,2,8,3,12,0,4]

function findLargestNumber() {
    const max = Math.max(...numbers);

    const index = numbers.indexOf(max);
    console.log(max);
}

findLargestNumber()