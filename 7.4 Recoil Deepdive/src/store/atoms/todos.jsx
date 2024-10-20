import axios from 'axios'
import {atom,atomFamily,selectorFamily} from 'recoil'

export const todosAtomFamily = atomFamily({
    key:'todosAtomFamily',
    // Use Selector Family for AtomFamily => Selector Family creates different selector for diff atom
    default: selectorFamily({
        key:"todosSelectorFamily",

        // ***** SYNTAX is little different - It returns a function inside a function ******
        // ALSO REMEMBER eg if id=2 and there are multiple components with id=2, it will send reques only once
        get:(id)=> async ({get})=>{
          await new Promise(r=> setTimeout(r,5000))
          const res = await axios.get(`http://localhost:8080/todo?id=${id}`)
          return res.data.todo;
        }

        // Another way to write

        // get: function(id) {
        //   return async ({get})=>{
        //     const res = await axios.get(`http://localhost:8080/todo?id=${id}`)
        //     return res.data.todo;

        // }

    })
})


