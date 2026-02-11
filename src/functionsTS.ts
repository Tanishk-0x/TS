// Function = In TS we fix the (argument) type as well as (return) type 

// function name(): number {} // Return Type Is Number 

function MakeChai( type: string , cups: number): string {
    return `Making ${cups} Cups Of Tea` ;
}

MakeChai("Elaichi" , 2); 

// TypeScript Automatically Infer the Type 
function getChaiPrice(){
    return 25 ; 
}

// Unknown / Any 
function MakeOrder( order: string ): unknown{
    if(!order){
        return null ; 
    }
    return order ; 
}

MakeOrder("GingerTea");

// Logging Function (void)
function logChai(): void {
    console.log("Logging Chai"); 
}

// Optional 
function orderChai( type? : string ){
    
}

orderChai(); 
orderChai("Elaichi");

// Default Argument 
function PrepareChai( type: string = "Masala" ){

}

PrepareChai(); 

function CreateChai( order : {
    type : string , 
    sugar : number , 
    size : "small" | "large"
}) {
    console.log("");
}


CreateChai({ type : "masala" , sugar : 5 , size : "small" });
