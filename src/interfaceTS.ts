
type ChaiOrder = {
    type : string , 
    sugar : number , 
    strong : boolean
};

function makeChai( order: ChaiOrder ){
    console.log(order);
}

function serveChai( order: ChaiOrder ){
    console.log(order);
}

// -------------------------------------
/* Interface = Ye sirf Objects ki design banane ke liye use hota hai.
  Ye ek "Rules" ki list hai jo object ko follow karni padti hai
*/ 

type TeaRecipe = {
    water : number , 
    milk : number , 
}

class MasalaChai implements TeaRecipe {
    water = 100 ; 
    milk = 50 ; 
}

// type CupSize = "small" | "large" ; 

// ------ Interface -----------

interface CupSize {
    size : "small" | "large" 
}

class Chai implements CupSize {
    size: "small" | "large" = "small"
}

// ----------------------------

// class Chai implements CupSize {
//     CupSize = "small"
// }

// Declaration Merging Possible in Interface
interface std {
    name : string 
}; 

interface std  {
    roll : number 
}

class S implements std {
    name: string = "tanishk" ; 
    roll: number = 990 
}


// --------------------------------------
// Known As Literal Type = ye value ho sakti he
type TeaType = "masala" | "ginger" | "lemon" ; 

function OrderTea( tea : TeaType ){
    console.log(tea); 
}

// ------------ Intersection -----------------
/* Intersection = Do ya do se zyada types ko aapas mein merge (mix) karke ek naya type banana. 
    Iska symbol ampersand (&) hota hai aur isme saari properties ka hona zaroori hai
*/

type Person = {
    name : string , 
    readonly age : number , // age is read only does not Assignable 
}; 

type Employee = {
    id : number , 
    salary? : number // salary is optional 
}; 

// Merge Person and Employee (have both property)
type Staff = Person & Employee ;

let User: Staff = {
    name : "rahul" , 
    age : 18 ,
    id : 73783 , 
}

// User.age = 99 ; ( Error : it is readOnly )

