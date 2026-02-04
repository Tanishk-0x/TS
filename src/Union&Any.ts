// Union = variable ko multiple type dene ke liye ( | ) 
// id can be string or number 
let id : string | number ; 
id = "abcdefghi" ; 
id = 8348389 ; 

let apiRequestStatus : 'pending' | 'success' | 'error' = 'pending' ; 
apiRequestStatus = 'success' ; 


// Any = TypeChecking ko OFF krdeta he 
// data koi bhi value le lega ( string,number,boolean )
let data : any = 'h1' ; 
data = true ; 
data = 90 ; 

const orders = ["22" , "34" , "12" , "99"];

let currentOrder: string | undefined ; 

for(let order of orders){
    if(order === '12'){
        currentOrder = order ; 
        break ;
    }
    currentOrder = '00'
}

console.log(currentOrder); 