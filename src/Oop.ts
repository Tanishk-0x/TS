/* Oop = Same as other language but more secure and safe */

// -----------------------------------------------------------------------
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
masalaChai.flavour = "masala" ;  

// -----------------------------------------------------------------------
// Access Modifiers: keywords that control who can see or change the data inside a class
/* 
    1. Public = accessible everywhere
    2. Private = accessible only within the class 
    3. Protected = accessible in the class and its inherited class 
*/

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

// SubClass 
class Branch extends CHAI {
    // method to access
    getName(){
        return this.shopName ; 
    }
}

const c = new CHAI() ; 
const secretIn = c.reveal() ; // SecretIngredients

const obj = new Branch().getName ; // shopName

// -----------------------------------------------------------------------
// Private: 
class Walet {
    // private 
    #balance = 100 ; 

    getBalance(){
        return this.#balance ; 
    }
}

const w = new Walet().getBalance ; // #balance 

// -----------------------------------------------------------------------
// Readonly Properties 
class Cup {
    readonly capacity: number = 250 ; 

    constructor( capacity: number ){
        this.capacity = capacity ; 
    }
}

// ----------------------------------------------------------------------
// Controlled Gates : 
// Getter = A special method used to retrieve or read a private property
// Setter = A special method used to update or change a private property

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

// ----------------------------------------------------------------------
/* Static ka matlab hai aisi property ya method jo poori Class
ki property hoti hai, na ki kisi ek individual object ki 
(static class ka object create nhi kr sakte) */
// class level , shared memory , direct access 

class EkChai {
    static shopName = "Code Caffe" ; 

    constructor(flavour: string) {
        // .......
    }
}

// Direct Access Not need to create object 
console.log(EkChai.shopName) ; 

// ----------------------------------------------------------------------
// Abstract Class : 
/* Abstract class ek aisi class hai jiska aap direct object 
nahi bana sakte; ye sirf doosri classes ke liye ek base ya 
Blueprint ki tarah kaam karti hai */

// No Direct Object 
// Abstract Methods(only declaration) : (e.g , abstract sound() );
// Can have real method that other class should follow 

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

// ----------------------------------------------------------------------
// Composition 
class Heater {
    heat() { }
}

class ChaiMaker{
    constructor( private heater: Heater ) { }; 

    make(){
        console.log(this.heater.heat); 
    }
}