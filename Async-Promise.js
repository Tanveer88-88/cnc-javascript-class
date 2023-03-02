// // function print(val){
// // console.log(val);
// // }

// // function foo(cb){
// //     setTimeout(()=>{
// //         console.log("settime")
// //         cb(1200);
// //     },1500)
// // }

// // foo(print);

// // function getSalary(cb){
// //     setTimeout(function(){
// //         cb(20000);
// //     },1500);
// // }

// // function subtractTax(sal){
// // return sal-(sal*0.25);
// // }

// // function subtractHouseRent(sal){
// //     return sal-1500;
// // }

// // function getDisposalSalary(cb){
// //     getSalary(function (salary){
// //         salary=subtractTax(salary);
// //         salary=subtractHouseRent(salary);
// //         cb(salary)
// //     })

// // }

// // getDisposalSalary(function(data){
// //         console.log(data);
// // })

   
// function callback1() {
//     console.log("callback1 is called only once, after 2 seconds");
//   }
  
//   function callback2() {
//     console.log("callback2 is called three times, with an interval of 1 second");
//   }
  
//   //setTimeout(callback1, 2000);
//   setTimeout(()=>{
// callback1();
//   },1000)
  
//   let counter = 0;
//   const intervalId = setInterval(() => {
//     callback2();
//     counter++;
  
//     if (counter === 3) {
//       clearInterval(intervalId);
//     }
//   }, 1000);

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .then(function(data) {
//     if (data !== 'victory') {
//         throw 'Defeat';
//     }

//     return job(true);
// })

// .then(function(data) {
//     console.log(data);
// })

// .catch(function(error) {
//     console.log(error);

//     return job(false);
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return new Error('test');
// })

// .then(function(data) {
//     console.log('Success:', data.message);
// })

// .catch(function(data) {
//     console.log('Error:', data.message);
// });


// let arr=[1,2,3,4,5,6,7,8];
// //arr.splice(3,0,9);
// let arr1=arr.slice(3,5);
// console.log(arr1);

function checkScope(){
    var globalvar="Var";
    let local="let";
}

console.log(globalvar);
//console.log(local);