//Array(map,filter,reduce)
const arr = [10,20,30,40,50];
console.log(arr);
// arr.push("orange");
console.log(arr);
// arr.unshift("start");
console.log(arr);
console.log(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     const element = arr [i];
//     console.log(element);
// }
//map
const newArr = arr.map((element)=>{
    return element*2;
})
console.log(newArr);
const product = [
    {
        price:1200,
        name:"IPhone"
    },
    {
        price:1400,
        name:"hp"
    },
    {
        price:100,
        name:"Lenovo"
    }
]
product.map((element)=>{
    console.log(element.name,element.price);
})

//filter
const arr1 = [10,20,30,40,50];
const res = arr1.filter((element)=>{
    return element >= 30;//
})
console.log(res);

//reduce
function sumOfElement(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumOfElement(arr1));

const ans = arr1.reduce((accumulator,element)=>{
    return accumulator+element;
},0)
console.log(ans)