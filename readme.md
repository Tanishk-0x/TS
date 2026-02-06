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