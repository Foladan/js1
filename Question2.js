// QUESTION 2 -SOLUTION
let books = [ "Design Thinking",
    "How to Win Customers and Keep Them",
    "The Power of Creativity",
    "Think Straight",
    "Walking in the Perferct Will of God"
];
books.push("How to work for God");
books.shift();
for (let i =0; i< books.length; i++){
    console.log(books[i])
  };   /* orderly */
  for (let i = books.length - 1; i >=0; i--){
    console.log(books[i])
  };   /* reverse */
