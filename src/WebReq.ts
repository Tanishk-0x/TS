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