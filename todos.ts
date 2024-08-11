import {promises as fs} from "fs"
interface Itodos{
    todoslist:string[];
    getTodos: ()=> void;
}
class Todos implements Itodos{
        public    todoslist: string[] = [];
        constructor(item:string[]){
            this.todoslist = item;
        }
        getTodos(){
            return this.todoslist
        }  

    }        
    const saveTodosInTextFile=async(Todos:string[]):Promise<void>=>{
      try {
            await fs.writeFile('tasks.txt', Todos.join('\n'));
            console.log
      }
      catch(error){
        console.error("Error saving to file: ", error);
        
      }
      
    }
      const mytodos= new Todos(['learn Reactjs',"learn Next.js"]);
      const result= mytodos.getTodos();
      console.log(result);
