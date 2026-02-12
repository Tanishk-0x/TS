// Interface = Data ko shape/structure provide krna 
// Interface JavaScript ka koi code generate nhi krte

interface Chai {
    flavour : string 
    price : number 
    milk? : boolean 
};

const masalaChai : Chai = {
    flavour : "masala" ,
    price : 20 
}; 

interface Shop {
    readonly id : number 
    name : string 
}; 

const s : Shop = { id : 101 , name : "Code Caffe" }; 
// s.id = 102 ;  ❌
s.name = "Bug Caffe" ; // ✅

// ---------------------------------------------------------------------------
// Functions in Interface 

// defination of function 
interface DiscountCalculator {
    ( price : number ): number 
}; 

// actual usage
const apply50 : DiscountCalculator = (p) => p*0.5 ;

// -------------------------------
interface TeaMachine {
    start(): void ; 
    stop(): void ;
}

const machine : TeaMachine = {
    start(){
        console.log("Start"); 
    },
    stop(){
        console.log("Stop")
    }
}

// ----------------------------------------------------------------------------
// Index Signatures : Jab object ki keys ke naam fix na hon, par unka type fix karna ho

interface ChaiRatings {
    // keys's name is not fixed 
    [flavour : string]: number ;
};

const ratings : ChaiRatings = {
    masala : 4.2 ,
    ginger : 4.8 , 
    elaichi : 3.7 ,
}; 

// ----------------------------------------------------------------------------
// Declaration Merging : Interface With Same Name Merged 

interface User {
    name : string ;
}; 

interface User {
    age : number ;
};

const U : User = {
    name : "xyz" , 
    age : 11
}

// ----------------------------------------------------------------------------
// Extend Interface (like inheritance)

interface A { a : string }; 
interface B { b : string }; 

interface C extends A , B {
    // follows both A and B 
}
