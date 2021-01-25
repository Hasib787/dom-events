function evenify_all(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (num % 2 === 0) {
            console.log(num, ': is even number');
        } else {
            console.log(num * 2, ': is odd number');
        }
    }
}

let numbers = [5, 58, 46, 21, 55, 89, 20];
evenify_all(numbers);

let friendsAge = [17, 25, 20, 14, 10, 24];
evenify_all(friendsAge);

//using return
function evenify(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    }
    else {
        result = num * 2;
    }
    return result;
}
let result=evenify(13);
let square=result*result;
console.log('square',square);

function even_all(nums) {
    let even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let result = evenify(num);
        even_array.push(result);
    }
    return even_array;
}
nums = [5, 9, 5, 8, 7, 88];
let nums_even = even_all(nums);
console.log(nums_even);