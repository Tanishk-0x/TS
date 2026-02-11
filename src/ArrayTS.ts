// Array = Collection of value that have same type 

const ChaiFlavours : string[] = ["Ginger" , "Elaichi" , "Masala"]; 
ChaiFlavours.push("Jaggery"); 
ChaiFlavours.pop(); 

const ChaiPrice : number[] = [10, 15, 20, 25]; 
ChaiPrice.push(30); 

// -------------------------------------------
const ratings: Array<number> = [3.0, 4.0, 5.0]; 

// --------------------------------------------
// Array of Objects 
type Chai = {
    name : string ;
    price : number ;
}; 

// custom type array 
const menu : Chai[] = [
    { name : "Elaichi" , price : 15 },
    { name : "Masala" , price : 10 }, 
    { name : "Jaggery" , price : 20 }, 
];

// --------------------------------------------
// ReadOnly Array (Can't modify)
const cities: readonly string[] = ["Delhi" , "Jodhpur"];

// --------------------------------------------
// MultiDimensional Array 
const table : number[] [] = [
    [1, 2, 3],
    [4, 5, 6]
]; 
