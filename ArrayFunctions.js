let names = ["ali", "ahsan", "saad"];
let array1 = [1, 2, 3, 4];


//-----Reduce function------//

//accamulate array
// let sumofNum=array1.reduce((acc,v)=>{
//         return acc+v;
// },0
// )
// console.log(sumofNum);

//convert array to object
// let objNames = names.reduce((acc, v) => {
//     (acc[v] = v);
//     return acc;
// }, {});

// console.log("objNames" , objNames);

////-----pure function------//
// function SquarAll(items) {
//  return items.map(item=>item*item);
// }
// console.log(SquarAll(array1));

//first class function

// function abc(){
//   console.log("abc");
// }

// let firstClassFun=abc();

//Heigher order function

// function xyz(){
//   return function(val){
//     console.log(val);
//   }
// }

// let heigherOrderFun=xyz();
// //heigherOrderFun("xyz");
// //or
// xyz()("xyz");


// function Multiplier(){
//   let counter=0;
//   return ()=>{
//      counter ++;
//      console.log(counter);
//   }
// }

// // Multiplier()();
// // Multiplier()();
// let doubler=Multiplier();
// doubler();
// doubler();
// // //doubler(4);

//Api fetch()

// var apiurl="https://api.github.com/users/tanveer88-88/repos";
// fetch(apiurl)
// .then(response=>{
//   console.log("respose", response);
// })

fetch("https://api.github.com/users/tanveer88-88/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.map(obj=>obj.name))
  }
  );