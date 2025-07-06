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
