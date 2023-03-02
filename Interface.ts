//interface is bluepreint of an object or class


type stringNumber = string | number;

interface Student {
  name1: string;
  age: number;
  id: number | string;
  phoneNumber: number | string;
  address: string;
  country ?: string;
  city?: string;
  courses: string[];
  department: string;
}

let std1: Student = {
  name1: "Ali",
  age: 18,
  id: 5,
  phoneNumber: 555,
  address: "hhhh",
  country: "pak",
  city: "ttt",
  courses: ["Math", "Eng"],
  department: "CS",
};

let std2: Student = {
  name1: "Wali",
  age: 18,
  id: 5,
  phoneNumber: 555,
  address: "hhhh",
  country: "pak",
  city: "ttt",
  courses: ["Math", "Eng"],
  department: "CS",
};

var allStudents: Array<Student> = [std1, std2];

const CreateStundent=(std:Student):object=>{
  if(!std.country){
    std.country="Pakistan"
  }
  return std;

}

//extend the Interface
//we use extend keyword to inherit properties and method of base interface to new interface with addition properties

// type Species= "cat" | "dog" | "bird"

// interface Pet{
//   species:Species;
//   name:string
// }

// interface Bird extends Pet{
//   species:"bird"
// } 

// const petIsBird=(pet:Bird)=>{
//   console.log(pet.species,pet.name)
// }

// petIsBird({species:"bird", name:"hhthht"});