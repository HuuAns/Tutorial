let a=5;
let b=7;

let sumab = (a,b) =>{
    return a+b
}

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr =[
    { name: "An" , Age: "23"},
    { name: "Hoa" , Age : "25"}
]
let filter = arr.filter((item, index)=>{
   
    return item && item.Age ==25;
});

console.log(filter)