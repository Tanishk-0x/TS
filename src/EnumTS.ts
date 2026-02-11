/* Enum =  (Fixed Options wali List) Jab aapke paas kuch fixed
options hote hain (jaise Hafte ke 7 din, ya Order ka status), 
toh unhe organize karne ke liye Enum ka use hota hai*/

// Choice ko Limit krna 

enum CupSize {
    SMALL , 
    MEDIUM , 
    LARGE
}; 

const size = CupSize.LARGE ; 

// ---------------------------------------------
// Numeric Enum : default behaviour he 
/* Agar aap koi value nahi doge, toh ye 0 se shuru 
hoga aur har agle option par +1 hota jayega */

enum Status {
    PENDING = 100 ,
    SERVED , // Automattically set to 102 (+1)
    CANCELLED , // 102
};

// String Enum : Yahan har key ki ek fixed string value hoti hai

enum ChaiType {
    MASALA = "masala" ,
    GINGER = "ginger"
}

function makeChai ( type : ChaiType ){
    console.log(`Making ${type}`); 
}

makeChai(ChaiType.GINGER); 
// makeChai("Ginger"); ❌


// ---------------------------------------
const enum Sugars {
    LOW = 1 , 
    MEDIUM = 2 , 
    HIGH = 3 
}; 
