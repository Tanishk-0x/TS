/* Tuple = Isme jitne types define kiye hain,
utne hi elements honge aur usi sequence mein honge */ 

// (type) aur (sequence) pehle se fix kr dete he
// Not flexible as array 
// Order Important hota he 
// Behind the scene hota array hi he 

let ChaiTuple : [ string , number ]; 

// ChaiTuple = [ 15 , "Masala"]; ❌
ChaiTuple = [ "Masala" , 15 ]; // ✅

// -----------------------------------------------
// tuple with optional value
let userInfo : [ string , number , boolean? ]; 

userInfo = [ "Masala" , 20 ];

// ------------------------------------------------
// ReadOnly Tuple 
const location : readonly [number , number] = [22.32 , 25.23]; 


// ------------------------------------------------
// Named Tuple : 
/* Bina naam wala Tuple sirf types batata hai,
lekin Named Tuple ye batata hai ki wo data kya hai 
lekin(jaise ye ID hai ya Name hai */ 

let chaiItems : [ name: string , price: number]; 
chaiItems = [ "Masala" , 25 ]; 

