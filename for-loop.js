function element(arr){
    for (let i=0;i<arr.length;
        i++){  
            console.log(arr[i]);
        } 
}
let namea=["Ann","Betty","shiko"];
element(namea);
// Write a function that accepts an array of numbers and uses the 
// forEach() method to console.log each number multiplied by 2
let nam=[3,5,6,7,8];
number (nam)
function number(nam){
    nam.forEach(element => {
        console.log(element*2)
    });
}
// Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and 
// the last two added by 5. Console the array with the new values
function items(arry){
    for(let i=0;i< 4;i++){
     arry [i] *=8;
    }
      
   
for (let i = arry.length - 2; i < arry.length; i++) {
    arry[i] += 5
   
  }
  console.log(arry);

}
let arry = [1, 2, 3, 4, 5, 6];
    items(arry)
//     // Write a function that takes in the following array and use a while loop to iterate 
//     and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function erio(arr) {
    let i = 0;
    while (i < arr.length) {
      console.log(arr[i]);
      i++;
      if (i === 5) {
        break;
      }

    }
  }
  let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
erio(arrNum);
// // Write a function that takes in a an array of strings and use a 
// continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']

function statement(fruits){
    for ( i = 0; i<fruits.length; i++) {
        if(i===2){
            continue;

        }
        console.log(fruits[i]);
    }
}
let fruits = ["apple","plum","banana","steawberries","kiwi"];
statement(fruits);