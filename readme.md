# TypeScript = JS + ExtraPower 
* TS never runs , it converts into js 
* TsCode --> Lexer --> Parser --> Binder --> Checker --> Emitter --> (.js , .d.ts , map)

## Installation 
1. npm init -y ==> package.json 
2. npm i -D typescript ==> Installing.. 
3. npx tsc --init ==> Initialise ts config to use ts 
4. Setup rootDir Root directory (./src) ==> For input ts files 
5. Setup dist outDir (./dist) ==> (To place JS Files here Genererated by Emitter)
6. tsc ==> Compile
7. node dist/index.js ==> Run

## Type Inference & Anotation 
### Inference : 
TypeScript automatically "guesses" the data type of a variable based on the value you first assign to it
```
let drink = "Chai" // ts inference that 'drink' is string 
```

### Anotation : 
You explicitly tell TypeScript what kind of data a variable, parameter, or function can hold by adding a colon (:) followed by the type
```
let age: number = 28 ; 
```

## Union & Any 
### Union:
allow a variable to hold more than one specific type of data, using ( | ) to separate them 
```
let id : string | number ; // id can be string or number 
```

### Any: 
that tells TypeScript to turn off type checking for a variable, allowing it to be literally any value (string, number, boolean, etc.)
```
let data : any = '27' ; // the value for data can be Any 
data = true ; 
data = 99 ; 
```

## Type Narrowing 
It is a check that tells TypeScript exactly what specific type a variable is at that moment, so you can perform operations on it safely without errors
```
function check( id : string | number ){
    if( typeOf id === 'string' ){
        return `String ${id}` ; // here TS Confirmly Know That What is The TYPE 
    }
    return `Number ${id}`
}
```


## Type Assertion 
Manually overriding TypeScript's guess because you are 100% sure about the data type.

It is like telling TypeScript, "Trust me, I know what I'm doing," to force it to treat a value as a specific type
```
let value: any = "Hello";

// You tell TS: "Treat this 'any' as a 'string' specifically."
let length = (value as string).length;
```

## Never (never)
The never type represents values that will never occur. It is mostly used for functions that always throw an error or never stop running (infinite loops)
```
function throwError(msg: string): never {
  throw new Error(msg); // This function never "returns" a value
}
```

## Interface (interface)
It is specifically used to define the structure of an object. Think of it as a "contract" or a blueprint that an object must follow

1. Declaration Merging
2. Easy To Extend (inheritance)
```
interface User {
  name: string;
  age: number;
}

const student: User = { 
    name: "Rahul",
    age: 22 
};

// functions in interface 
// defination of function 
interface DiscountCalculator {
    ( price : number ): number 
}; 

// actual usage
const apply50 : DiscountCalculator = (p) => p*0.5 ;
```

#### Index Signature 
Jab object ki keys ke naam fix na hon, par unka type fix karna ho
```
interface ChaiRatings {
    // keys's name is not fixed 
    [flavour : string]: number ;
};

const ratings : ChaiRatings = {
    masala : 4.2 ,
    ginger : 4.8 , 
    elaichi : 3.7 ,
}; 

```

## Intersection ( & )
It combines multiple types into one. The new type must have all the properties from all the types you joined together

```
type Person = { name: string };
type Employee = { id: number };

// 'Staff' ke paas 'name' aur 'id' dono hona chahiye
type Staff = Person & Employee;

let worker: Staff = {
  name: "Amit",
  id: 101
}; 
```

## Objects 
An object is a way to group related data together using key-value pairs. In TypeScript, you define the "shape" of the object to ensure it has the correct properties and types

 ###### TS automatilcally infer the object

```
// Declaring Object Type 
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
```  


## Partial Utitity Type ( Partial< Type > ) 
It makes all properties of a type optional, so you can provide only the ones you need
```
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
```

## Required ( Required < Type > )
It is the exact opposite of Partial. It takes a type with optional properties (?) and makes every single one of them mandatory
```
// Required = ? Optional but Required 
type chaiOrder = {
    name? : string ; 
    quantity? : number ;  
}; 

const OrderChai = (order : Required<chaiOrder> ) => {
    console.log("Ordering.." , order); 
}

OrderChai({name : "ginger" , quantity : 12 }); 
```

## Pick ( Pick< Type , "prop1"|"prop2"> )
It creates a new type by selecting only the specific properties you need from an existing type
```
type chai = {
    name : string ; 
    price : number ; 
    isHot : boolean ; 
    ingredients : string[] ; 
}; 

// new type created with (name and price)
type BasicChaiInfo = Pick< chai , "name" | "price" >; 
```

## Omit ( Omit< Type , "prop"> )
It creates a new type by taking an existing type and removing specific properties that you don't want to include
```
type ChaiNew = {
    name : string ; 
    price : number ;  
    secretIngredients : string[] ; // OMIT 
}; 
// Newe type created without secretIngredients
type PublicChai = Omit<ChaiNew , "secretIngredients">
```

##  Functions 
Functions in TypeScript allow you to specify the data types for both the inputs (parameters) and the output (return type)
```
// 'a' and 'b' must be numbers, and it must return a number
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 10); // Sahi hai
// add(5, "10"); // Error! "10" string hai
```

## Array 
Collection of same data type values 
```
const ChaiFlavours : string[] = ["Ginger" , "Elaichi" , "Masala"]; 

ChaiFlavours.push(20); // Error! Sirf string allow hain

const ratings: Array<number> = [3.0, 4.0, 5.0]; 

// Custom type array 
type Chai = {
    name : string ; 
    price : number ; 
}
const menu : Chai[] = [
    { name : "Elaichi" , price : 15 },
    { name : "Masala" , price : 10 }, 
    { name : "Jaggery" , price : 20 }, 
];

// ReadOnly Array (Can't modify)
const cities: readonly string[] = ["Delhi" , "Jodhpur"];
```

## Tuple 
A tuple is a special type of array with a fixed number of elements where each element has a predefined type in a specific order

1. (type) aur (sequence) pehle se fix kr dete he
2. Not flexible as array
3. Order is must Important 
4. Behind the scene, Tuple ek normal JavaScript Array hi hota hai
```
let ChaiTuple : [ string , number ]; 

ChaiTuple = [ 15 , "Masala"]; // ❌
ChaiTuple = [ "Masala" , 15 ]; // ✅

// Named Tuple: show what the data actually is?
let info = [ id: number , name: string ]; 
```

## Enum (enum)
An enum is a fixed list of named options that helps you avoid mistakes by limiting choices to a specific set

Enums (Enumerations) ka kaam hai related values ke ek group ko "Named Constants" mein badalna. Iska matlab hai ki aap numbers ya strings ki jagah unhe ek readable naam de dete ho
* (Fixed Options wali List)
* Always in CAPS (standard practice)
* When we have fixed options like (order status , 7 days of week) to organize this we use Enum
```
enum CupSize {
    SMALL , 
    MEDIUM , 
    LARGE
}; 

const size = CupSize.LARGE ;
```
#### Numeric Enum:
Ye default behavior hai. Agar aap koi value nahi doge, toh ye 0 se shuru hoga aur har agle option par +1 hota jayega
```
enum Status {
    PENDING = 100 ,
    SERVED , // Automattically set to 102 (+1)
    CANCELLED , // 102
};
let track = Status.SERVED ; // 101 
```

#### String Enum:
Yahan har key ki ek fixed string value hoti hai
```
enum ChaiType {
    MASALA = "masala" ,
    GINGER = "ginger"
}

function makeChai ( type : ChaiType ){
    console.log(`Making ${type}`); 
}

makeChai(ChaiType.GINGER); // ✅
makeChai("Ginger"); // ❌
```

## OOP 
Way to organize your code by grouping related data and behavior together. Same as other language but more secure and safe

#### Class / Object / Constructor : 
1. Class = A blueprint or template used to create objects
2. Object = A real instance or entity built from a class
3. Constructor = A special function that initializes a new object's properties

```
// Creating Class 
class Chai {
    flavour : string ; 
    price : number ; 

    // Creating Constructor (parametrised contructor)
    constructor ( flavour: string , price: number ){
        this.flavour = flavour ; 
        this.price = price ; 
    }
}

// Creating Its Object 
const masalaChai = new Chai( "Ginger" , 20) ;
```

#### Access Modifiers: 
keywords that control who can see or change the data inside a class (permission settings)
1. Public = The data is open to everyone (this is the default setting)
2. Private = The data is "top secret" and can only be used inside that specific class
3. Protected = The data is shared only with the class itself and its "children" (inherited classes)
```
class CHAI {
    // accessible everywhere
    public flavour: string = "Masala" ; 

    // only accessible inside the class 
    private secretIngredients: string = "Cardamom" ; 

    // Method to access private member 
    reveal(){
        return this.secretIngredients ; // OK 
    }

    // accessible within the class & inherited class 
    protected shopName: string = "Chai Corner" ; 
}

// SubClass (inherit CHAI Class)
class Branch extends CHAI {
    // method to access
    getName(){
        return this.shopName ; 
    }
}

const c = new CHAI() ; 
const secretIn = c.reveal() ; // SecretIngredients

const obj = new Branch().getName ; // shopName
```

#### Controlled Gates: (getter / setter) 
1. getter = A special method used to retrieve or read a private property
2. setter = A special method used to update or change a private property
```
class MordernChai {
    // private member 
    private _sugar = 2 ; 

    // getter : to retrieve the value 
    get sugar(){
        return this._sugar ; 
    }

    // setter : to set or update the value 
    set sugar(value: number){
        if(value > 5){
            throw new Error("Too Sweet!"); 
        }
        // setting 
        this._sugar = value ; 
    }
}

const m = new MordernChai() ; 
m.sugar = 4 ; 
```

#### Static
The static keyword in TypeScript is used to define class members (properties or methods) that belong to the class itself rather than to its instances. These members are accessed directly through the class name without creating an object
###### Key Points: 
1. Class Level: Inhe call karne ke liye new ClassName() Object create karne ki zaroorat nahi hoti.
2. Memory Efficient: Pure program mein inki sirf ek hi copy banti hai.
3. No this: Static methods ke andar aap this keyword ka use nahi kar sakte (kyunki this object ko refer karta hai, aur static class ka hota hai).
4. Shared State: Agar ek jagah se value badli, toh wo sabhi ke liye badal jayegi.
```
class EkChai {
    static shopName = "Code Caffe" ; 

    constructor(flavour: string) {
        // .......
    }
}

// Direct Access Not need to create object 
console.log(EkChai.shopName) ;
```

#### Abstract Class 
An abstract class is a restricted base class that cannot be used to create objects directly and serves as a blueprint for other classes to inherit from. (act as blueprint for other class).
1. No Direct Object: Inka directly object create nhi kr sakte.
2. Abstract Methods: Isme kuch aise methods ho sakte hain jinme code nahi hota, sirf naam hota hai (e.g., abstract sound()). Child classes ko ye methods likhna / define krna hi padta hai.
3. Real Methods: Isme normal methods bhi ho sakte hain jinme logic likha ho, jo sab child classes share karengi.
```
abstract class Drink {
    // abstract method 
    abstract make() : void ; // only declaration 
}

// using the abstract class 
class MyChai extends Drink {
    make(){
        console.log('Making chai'); 
    }
}
```

## Generic 
Generics are placeholders that allow you to create functions, classes, or interfaces that work with any data type while still keeping the code safe and strict (General Functions)

Generics ka matlab hai ek "Khali Seat" (Placeholder). Aap code likhte waqt ye nahi batate ki data string hoga ya number, balki aap ek placeholder <T> chhod dete ho. Jab aap us code ko use karte ho, tab aap decide karte ho ki wahan kaunsa type aayega

###### Why??
* Flexiblity : ek hi logic alag-alag data types par bina kisi error ke chal sake
* Reusability , Type Safety , No Code Duplication 
```
// <T> = PlaceHolder
function WrapInArray <T> (item: T): T[] {
    return [item] ; 
}

// Here decides what is the type? 
WrapInArray("masala");  ✅
WrapInArray(15);  ✅
WrapInArray({ falvour : "ginger" });  ✅
```

#### Generic Interface: 
```
// Generic Interface 

interface Box <T> {
    content : T ; 
}

// using the generic interface 
const numberBox : Box<number> = {
    content : 10055  
};

const stringBox : Box<string> = {
    content : "Masala" 
}
```

## .d.ts (type-declaration)
A .d.ts file contains only type information. It describes the "shape" of JavaScript code so that TypeScript can provide autocomplete and error checking for code that wasn't originally written in TypeScript
###### Key Features:
1. No Implementation: You only write the types (signatures), not the function body.
2. No JS Output: These files are used only during development. They are completely ignored during the final build (compilation) and do not produce a .js file.
3. Ambient Declarations: They use the declare keyword to tell TS, "Trust me, this exists somewhere else (like in a global script or a JS library)

## Web Request
```
import axios, {type AxiosResponse , isAxiosError} from "axios";

// AxiosResponse = built in interface(Generics) provided by axios

/* Jo data web request se aane wala he ya jo 
send krenge dono ka structure define krte h */ 

// structure...
interface Todo {
    userId : number ; 
    id : number ; 
    title : string ;
    completed : boolean ;
};

const fetchData = async () => {
    try {
        // Generic 
        const response : AxiosResponse<Todo> = 
        await axios.get("https://jsonplaceholder.typicode.com/todos/1");
        
        console.log("Todo" , response.data); 
    }
    
    catch (error: any) {
        if( axios.isAxiosError(error) ){
            console.log("Axios Error" , error.message);
            if(error.response){
                console.log(error.response.status); 
            }
        }
    }
}
```