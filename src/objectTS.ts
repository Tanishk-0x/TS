/* Object = To group related data into key-value pairs 
 to ensure its correct properties and types. 
 => TS automatilcally infer the object 
*/

// Object
const Chai = {
    name : "masala chai" , 
    price : 15 , 
    isHot : true 
}; 

/*
    {
        name : string ; 
        price : number ; 
        isHot : boolean ; 
    }
*/

// ------------------------------------
// Declaring Object Type : 
let tea : {
    name : string ; 
    price : number ; 
    isHot : boolean ;
}; 

tea = {
    name : "Ginger Tea" , 
    price : 15 , 
    isHot : true ,
}; 

// ------------------------------------
// Object using type alias 
type Tea = {
    name : string ;
    price : number ; 
    ingredients : string[] ; 
}; 

const adrakChai: Tea = {
    name : "Ginger Tea" , 
    price : 25 , 
    ingredients : ["ginger" , "teaLeaved"]
}

// ------------------------------------
type Cup = { size : string } ; 
let smallCup : Cup = { size : "200ml" } ; 

// No issue with Extra Value (material)
let largeCup = { size : "500ml" , material : "steel" }; 

smallCup = largeCup ; // Runs Fine,, Because ( bare minimum property satisfied )

// ------------------------------------
type User = {
    username : string ; 
    password : string ;  
}; 

const u: User = {
    username : "Tanishk" ,
    password : "1234"
}
// -------------------------------------
// Split Out in TS (Destructuring) : extract specific value from object 

type Item = { name : string , quantity : number }; 
type Address = { street : string , pincode : number }; 

type Order = {
    id : string ; 
    items : Item[] ; 
    address : Address ; 
}; 

type user = Item & Address ; 

let person: user = {
    name : "tanishk" , 
    quantity : 2 , 
    street : "mussorie" , 
    pincode : 988
}; 

const { name , pincode } = person ; // Destructuring 

// ------------------------------------------
// Partial Utility Type = Passing All Values is not required 
type Chai = {
    name : string ; 
    price : number ; 
    isHot : boolean ;
}; 

const updateChai = ( updates: Partial<Chai> ) => {
    console.log("Updating Chai" , updates); 
}

updateChai({name : "ginger"}); 
updateChai({}); 

// ------------------------------------------
// Required = ? Optional but Required 
type chaiOrder = {
    name? : string ; 
    quantity? : number ;  
}; 

const OrderChai = (order : Required<chaiOrder> ) => {
    console.log("Ordering.." , order); 
}

OrderChai({name : "ginger" , quantity : 12 }); 

// ------------------------------------------
/* Pick = Ek bade type mein se apni pasand ki properties ko "select krna" (pick karna)
 aur unka naya type banana */

type chai = {
    name : string ; 
    price : number ; 
    isHot : boolean ; 
    ingredients : string[] ; 
}; 

// new type created with (name and price)
type BasicChaiInfo = Pick< chai , "name" | "price" >; 

const chaiInfo : BasicChaiInfo = {
    name : "ginger chai" , 
    price : 15 ,  
}

// ----------------------------------------------
/* Omit = It creates a new type by taking an existing type
 and removing specific properties that you don't want to include */
type ChaiNew = {
    name : string ; 
    price : number ; 
    isHot : boolean ; 
    secretIngredients : string[] ; //OMIT 
}; 

// New type created Without secretIngredients
type PublicChai = Omit<ChaiNew , "secretIngredients"> ; 

let CHAI : PublicChai = {
    name : "elaichi" , 
    price : 20 , 
    isHot : true ,
}