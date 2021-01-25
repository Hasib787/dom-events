function evenify(num) {
    if (num % 2 === 0) {
        console.log(num, ': is even number');
    } else {
        console.log(num * 2, ': is odd number');
    }
}
function evenify_all(numbers){
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        evenify(num);
    }
}

let numbers = [5, 58, 46, 21, 55, 89, 20];
    evenify_all(numbers);

let friendsAge = [17, 25, 20, 14, 10, 24];
    evenify_all(friendsAge);
