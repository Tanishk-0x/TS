// Type Assertion (as) = TS ke Guess Ko Manually Override krna 
// TS Guess ----> String 
let response: any = "42" ; 

// TS Treats response as String 
let numericLength: number = (response as string).length ; 

//Example2 : 
type Book = {
    name : string 
}; 

let bookString = '{"name" : "who moved"}' ; 
let bookObject = JSON.parse(bookString) as Book ; 

console.log(bookObject.name); 

//Example3 : 
const inputElement = document.getElementById("username") as HTMLInputElement ; 

// ------------------------------------------------
// Any and Unknown 
let value: any ;
value = "hello" , 
value = [90,95,99]; 
value= 98 ; 
value.toUpperCase(); 

let newValue: unknown ; 
newValue = "hello" ; 
newValue = 99 ; 
newValue = [90,95,99]; 
if( typeof newValue === "string" ){
    newValue.toUpperCase() ;
} 


// -----------------------------------------------
// type Guard in try-catch 
try {
    // .......
}

catch (error) {
    if( error instanceof Error ){
            console.log(error.message); // TypeGuard 
    }
    console.log("Error");  
}


// ------------------------------------------------
// Never = never ka matlab hai aisi value jo kabhi nahi ho sakti

type Role = "admin" | "user" ; 

function redirectBasedOnRole ( role: Role ): void {
    if( role === "admin" ){
        console.log("Redirecting to Admin Page"); 
        return ; 
    }
    if( role === "user" ){
        console.log("Redirecting to User Page"); 
        return ; 
    }
    role ; // never 
}

// This Function Never returns a value 
function neverReturn (): never {
    while(true){} 
}