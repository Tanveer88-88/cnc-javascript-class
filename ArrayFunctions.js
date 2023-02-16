let names = ["ali", "ahsan", "saad"];
let array1 = [1, 2, 3, 4];

//accamulate array
// let sumofNum=array1.reduce((acc,v)=>{
//         return acc+v;
// },0
// )
// console.log(sumofNum);

//convert array to obuject
// let objNames = names.reduce((acc, v) => {
//     (acc[v] = v);
//     return acc;
// }, {});

// console.log("objNames" , objNames);

function SquarAll(items) {
 return newItem= items.map((item) => {
     return item * item;
     
  });
}
console.log(SquarAll(array1));

