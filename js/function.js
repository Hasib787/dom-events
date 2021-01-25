let numbers = [5, 58, 46, 21, 55, 89, 20];
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
        console.log(num, ': is even number');
    } else {
        console.log(num * 2, ': is odd number');
    }
}