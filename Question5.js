// QUESTION 5 -SOLUTION
let oddArray = [];

for (let i = 1; i<50; i+=2){
  oddArray.push(i)
}   
console.log(oddArray)
console.log(oddArray.length)

let countDivBy5 = 0;
for (let i of oddArray){
  if (i % 5 === 0){
    countDivBy5 +=1;
  }
}
console.log(countDivBy5)

let evenArray = [];
for (let i = 0; i<=50; i+=2){
  evenArray.push(i)
}
console.log(evenArray)
console.log(evenArray.length)

let numDivBy5 = 0;
for (let i of evenArray){
  if (i % 5 === 0){
    numDivBy5 +=1;
  }
}
console.log(numDivBy5)
