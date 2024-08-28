import { Todo } from "./Todo"

export function ListTodos({todos}) {
    console.log("listtodo",todos)
    return (
        <div>
            {Object.keys(todos).length ? todos.map((todo)=>{
                return <Todo todo={todo}/>
            }): null} 
        </div>
    )
}