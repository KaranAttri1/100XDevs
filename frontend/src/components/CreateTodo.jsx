import {useState,useRef} from 'react'
import axios from 'axios';

export function CreateTodo() {
    const titleRef = useRef();
    const descriptionRef = useRef();

    const[title,setTitle] = useState("")
    const[description, setDescription] = useState("")

    function submitTodo() {
        axios.post("http://localhost:3000/todo",
            {
            title: title,
            description:description
        }).then((res)=>{
            console.log("Post created")
        })
    }
    return (
        <div> 
            <input ref={titleRef} onChange={()=>setTitle(titleRef.current.value)} placeholder="Title" type="text" />
            <input ref={descriptionRef} onChange={()=>setDescription(descriptionRef.current.value)} type="text" placeholder="Description" />
            <button onClick={submitTodo}>Create Todo</button>    
        </div>
    )
}