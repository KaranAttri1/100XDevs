import {atom,atomFamily} from 'recoil'
export const TODOS =     [         
  {
    id:1,
    title:"Gym",
    description:"Evening Cult",
    completed:false
  },
  {
    id:2,
    title:"Dance",
    description:"Foxfire",
    completed:false
  }
]

// atomFamily returns an atom with the given input => BASICALLY IT IS AN ATOM MAKING MACHINE

export const todosAtomFamily = atomFamily({
    key:'todosAtomFamily',
    // default value is a function here

    // eg. if same id is asked again, default wont run , rather it will return a cached value, just like an atom
    default: id => {
        let foundTodo = null;
        return TODOS.find(todo => todo.id === id)
    }
})


// Drawback of storing Todos as an atom is that if one todo chnages all Todo components re-render, i.e.w we use atomFamily