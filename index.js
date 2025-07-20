let library = [
  ["Book1", "Book2", "Movie1"],    
  ["Movie2", "Book3", "Book4"],    
  ["Movie3", "Book5", "Movie4"]    
];


console.log(library[0][0]);  
console.log(library[0][1]); 
console.log(library[0][2]); 

console.log(library[1][0]); 
console.log(library[1][1]); 
console.log(library[1][2]); 

console.log(library[2][0]); 
console.log(library[2][1]); 
console.log(library[2][2]); 


let row, item;

row = 0; item = 0;
console.log(library[row][item]);

row = 0; item = 1;
console.log(library[row][item]); 

row = 0; item = 2;
console.log(library[row][item]); 

row = 1; item = 0;
console.log(library[row][item]);  

row = 1; item = 1;
console.log(library[row][item]);  

row = 1; item = 2;
console.log(library[row][item]); 

row = 2; item = 0;
console.log(library[row][item]); 

row = 2; item = 1;
console.log(library[row][item]); 

row = 2; item = 2;
console.log(library[row][item]); 

let secondShelf = 1;
for (let i = 0; i < library[secondShelf].length; i++) {
  console.log(library[secondShelf][i]);
}
