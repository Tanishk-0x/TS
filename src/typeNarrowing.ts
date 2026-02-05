/* TypeNarrowing = ek check hota he jo TS ko confirmly batata he ki ek variable 
    us time per kis specific type ka he 
    (so that we can perform operation safely)
*/

function getChai( kind : string | number ){
    if( typeof kind === 'string' ){
        return `Making ${kind} Chai (string)` ; // Here TS Confirmly Know what is the TYPE 
    }
    return `Total Order ${kind} (number)` ; 
}

// ------------------------------------------

//TruthiNess 
function serve( msg? : string ){
    if( msg ){
        return `Message Found!`
    }
    return `Default Message`
}

//Exhaustive Checks 
function orderChai ( size : "small" | "medium" | "large" | number ){
    if( size === "small" ){
        return `Serving Small Chai` ; 
    }
    if( size === "medium" || size === "large" ){
        return `Serving Extra Chai` ;
    }
    return `Serving ${size} Chai` ; 
}

// ------------------------------------------

class KulhadChai {
    serve(){
        return `Serving Kulhad Chai`
    }
}

class CuttingChai {
    serve(){
        return `Serving Cutting Chai`
    }
}

function Serve( chai : KulhadChai | CuttingChai ){
    if( chai instanceof KulhadChai ){
        return chai.serve() ; 
    }
}

// ------------------------------------------
// Creating Custom Types 
type ChaiOrder = {
    type : string , 
    sugar : number 
}

// Checks the Validations 
function isChaiOrder( obj: any ): obj is ChaiOrder {
    return (
        typeof obj === "object" && 
        obj != null && 
        typeof obj.type === "string" && 
        typeof obj.sugar === "number" 
    )
}

function serveOrder( item: ChaiOrder | string ){
    if( isChaiOrder(item) ){
        return `Serving ${item.type} Chai With ${item.sugar} Sugar`;
    }
    return `Serving Custom CHai ${item}`; 
}

// ------------------------------------------
// Assigning Custom Types 
type MasalaChai = { type: "masala" , spiceLevel: number }; 
type GingerChai = { type: "ginger" , amount: number }; 
type ElaichiChai = { type: "elaichi" , aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai ; 

function MakeChai (order : Chai){
    switch (order.type){
        case "elaichi" : 
            return `Making Elaichi Chai` ;
            break ; 
        case "masala" : 
            return `Making Masala Chai` ;
            break ;
        case "ginger" : 
            return `Making Ginger Chai` ;
            break ;
    } 
}

//checking a property 
function brew( order: MasalaChai | GingerChai ){
    if( "spiceLevel" in order ){
        return `Masala Chai`
    }
}

// ------------------------------------------
// Unknown 
// function isStringArray( arr: unknown ): arr is string[] {
   
// }