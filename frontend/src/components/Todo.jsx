export function Todo ({todo}) {
    return (
        <div>
            <div>{todo.title}</div>
            <p>{todo.description}</p>
            {todo.completed ? <div> Completed </div>
            : <button>Mark Completed</button>}
        </div>
    )
}