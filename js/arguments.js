function addNumbers(num1) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
let result = addNumbers(4, 5, 6, 25);
console.log(result);

//another example
function getFullName(firstName, lastName) {
    let fullName = firstName + lastName;
    return fullName;
}
let myName=getFullName('Hasibul',' Hasan');
console.log(myName);