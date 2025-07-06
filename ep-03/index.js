//spread operators:
//object/array, function
//...
//duplicate

//make a duplicate array
const arr = [1,2,3];
const duplicateArr =[...arr,4,5,6,"Apple","Banana"];//return a new array
console.log(duplicateArr);

//Q. Merge two array
const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9,10];
// output result = [1,2,3,4,5,6,7,8,9,10]
const result = [...num1,...num2];
console.log(result);

//object
//Q. merge two object
const obj1 = {
    a:1,
    b:2,
}
const obj2 = {
    c:"Hello",
    d:"developers"
}
//output:
//res = {
//  a:1,
//  b:1,
//  c:"Hello",
//  d:"developers"
//}
const res = {
    ...obj1, ...obj2
}
console.log(res);

//function
function sum(...numbers){
    // console.log(numbers);
    let sum = 0;
    for (let i =0;i < numbers.length;i++) {
        sum+=numbers[i];
        
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6));
