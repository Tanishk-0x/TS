// Generic = General Functions 
// Generic = (Templates hote h code ko reusable bna dete h );

/* Code likhte time nhi btate ki data string hog aya number hoga ,, 
balki ek PlaceHolder <T> Chhod dete he , Jab code ko use krte he 
tab decide krte he wha konsa Type aayega */
// Partical , Pick , Omit also available in Generic

// <T> = PlaceHolder
function WrapInArray <T> (item: T): T[] {
    return [item] ; 
}

// Here decides what is the type? 
WrapInArray("masala"); // ✅
WrapInArray(15); // ✅
WrapInArray({ falvour : "ginger" }); // ✅


function Pairs <A , B> (a: A , b: B): [A , B] {
    return [a , b]; 
}

Pairs("Masala" , "Test"); // ✅
Pairs("Masala" , 20); // ✅
Pairs("Masala" , {flavour : "Ginger"}); // ✅

// ----------------------------------------------------------------
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

// ----------------------------------------------------------------
interface ApiPromise <T> {
    status : number ;
    data : T ;
};

const ApiResponse : ApiPromise <{flavour : string}> = {
    status : 201 ,
    data : {flavour : "Masala"}
}; 