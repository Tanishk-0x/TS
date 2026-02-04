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

let drink = "Chai" // ts inference that 'drink' is string 

### Anotation : 
You explicitly tell TypeScript what kind of data a variable, parameter, or function can hold by adding a colon (:) followed by the type

let age: number = 28 ; 