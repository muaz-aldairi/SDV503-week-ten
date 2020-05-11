
// Math.floor will round down the number into integer 

let num1=Math.floor(-12.33);
console.log(num1);

// Math.ceil will round up the number into integer 

let num2=Math.ceil(12.01);

console.log(num2);
// Math.round will round (up or down) the number into the closer integer. (12.50) is closer to 13 not 12

let num3=Math.round(12.50);

console.log(num3);


//Generate Random number between 0 and 1 by using Math.random() object 

 console.log(Math.random());
 
//Generate Random integer number between 0 and 10 by using Math.random() and Math.floor() objects

console.log(Math.floor(Math.random()*10));


// strings datatype 

let name= "Muaz Aldairi";

//Find the Length of a String. start counting from 0
console.log(name.length);
console.log('Muaz Aldairi'.length);

// find the latter of the string. start counting from 0
let myInitial= name[5];
let d = name[name.length - 5];
console.log(myInitial);
console.log(d);

// .charAt()
let myInitial2 =name.charAt(5);
let d2= name.charAt(name.length-5);
console.log(myInitial2);
console.log(d2);

// string comparison. js will compare the first latter( always a<z). if the first latter is the same, JS will compare the second latter and so.
let a1= "aaa";
let b1= "ab";

console.log(a1<b1)


// searching in the string .indexOf()  .lastIndexOf()

// .indexOf() will start searching from the beginning .lastIndexOf() will start searching from the end 
// if the character/word is not exist, the result will be -1
//we can also add optional parameter to specify the index at which the method should begin its search.
let a = 'Something to be found.';
console.log(a.indexOf("o"));
console.log(a.indexOf("z"));
console.log(a.indexOf("found"));
console.log(a.lastIndexOf("o"));
console.log(a.indexOf("o",5));
console.log(a.lastIndexOf("o",5));

// example (function)

function findInString(x,y) {
  return x.indexOf(y) !== -1
}
console.log(findInString("Muaz","a"));

// .includes() .startsWith() .endsWith(). they are case sensitive
console.log(a.includes("To"));
console.log(a.includes("i"));
console.log(a.startsWith("something"));
console.log(a.startsWith("S"));
console.log(a.endsWith("found"));
console.log(a.endsWith("."));

// gitting a substring .substring(,) .substr(,)  .slice(,)
//substring returns a substring between the start and end indices.not including the end index.
// The slice returns a substring from start to end, not including the end index.
// the substr returns a substring, from start, of a length you specified.
console.log(a.substring(2,8));
console.log(a.substr(2,5));
console.log(a.slice(2,8));

// using .split("") will return an array that has evry single character in the string.
console.log(a.split(""));

// using .replace( , ) method to replace substring. 

console.log(a.replace("found","replaced"))

// objects

let obj = {};

//  add information to the object 

// array will be the key of the property and the array(arr) will be the value of this property.
obj.array=[1,2,3,4];
console.log(obj);
// title will be the key of the property and the string "SDV" will be the value of this property.
obj.title = "SDV";
console.log(obj);

// arrays
fArray=[2011,2022,2033]
// Add data to the end
fArray.push(2013);
fArray;

// Add data to the front
fArray.unshift(2015);
fArray;

// delete data from the front
fArray.shift();
fArray;

// delete data from the end
fArray.pop();
fArray;


//Global Scope and Local Scope
// the variable defined in the global scope, is defined and could be used in any local scope
// the variable defined in the local scope, is not defined and could not be used in the global scope or any other local scope.
// the variable in the local scope will override the variable in the global scope that has the same name.

let names = "Mouse";

function test1() {
    
    console.log(names);
  }
function test2() {
  
    let names = "Dog";
    console.log(names);
  }

  test1();
  test2();
  console.log(names);