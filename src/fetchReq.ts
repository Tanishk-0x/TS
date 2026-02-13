interface Todo {
    userId : number ; 
    id : number ; 
    title : string ;
    completed : boolean ;
}

const fetchData = async () => {
    try {
        const response = 
        await fetch("https://jsonplaceholder.typicode.com/todos/1");
        // Manually Handle 
        if(!response.ok){
            throw new Error(`Http erro ${response.status}`);
        }

        const data: Todo = await response.json() ;
    }
    
    catch (error: any) {
        
    }
}