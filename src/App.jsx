// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React, { useState } from 'react'



function App() {
  // const[title1, setTitle1] = useState("karan")
  // const[todos, setTodo]  = useState(
  //   [ {id:1,
  //     title:"Gym", 
  //     description:"7-9pm"},
  //     {id:2,
  //     title:"study",
  //     description:"Habitstrong"}
  //   ])

    // function AddTodo () {
    //   let id = todos.length + 1;
    //   setTodo([...todos,{id: id, title:"no 3", description: "hn v"}])
    // }
  return (
    <>
      {/* <button onClick={() => setTitle(Math.random())}> Change title</button>
      <Header title = {title1}></Header>
      <Header title = "attri"></Header> */}
      {/* <button onClick={AddTodo}>Add Todo</button>
      {todos.map((todo)=>{
        return (<Todo key={todo.id} title={todo.title} desciption={todo.description}></Todo>
        )
      })} */}
      <CardWrapper children={<TextComponent/>} ></CardWrapper>
    </>
  )
}

// function HeaderWithButton () {
//   const[title, setTitle] = useState("karan")

//   return (
//     <>
//       <button onClick={() => setTitle(Math.random())}> Change title</button>
//       <div>
//         {title}
//       </div>
//     </>
//   )
// }


// const Todo = React.memo( function({title,desciption}) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{desciption}</p>
//     </div>
//   )
// })


// Memo helps you to skip rerendering the child if its props are unchanged
// const Header = React.memo( function Header ( {title} ) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// })

// function Header ( {title} ) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// }

function CardWrapper ({children}) {
  return (
    <div>
      {children}
    </div>
  )
}

function TextComponent () {
  return (
    <div>HI</div>
  )
}
export default App;
