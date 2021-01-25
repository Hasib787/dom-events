function explain_callBack(name, age, task) {
    console.log('Name is :', name);
    console.log('Age: ', age);
    task();
}
function washHand() {
    console.log('Wash hand with soap');
}
function takeShower() {
    console.log('Take shower');
}
function scrollFacebook(){
    console.log('Scroll Facebook but do not like any post');
}
explain_callBack('Hasib', 25, washHand);
explain_callBack('Rana', 22, takeShower);
explain_callBack('Riad',21, scrollFacebook);
