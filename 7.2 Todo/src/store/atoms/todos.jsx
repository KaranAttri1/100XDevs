import {atom,selector} from 'recoil'


export const todosAtom = atom({
    key:"todos",
    default:[]
})

export const filterInputAtom = atom({
    key:"filterInput",
    default:""
})


// Selector 

export const filteredTodosSelector = selector({
    key:"filteredTodos",
    get:({get}) => {
        const todos = get(todosAtom);
        const filterInput = get(filterInputAtom);

        return todos.filter( todo => todo.title.includes(filterInput) || todo.description.includes(filterInput))
    }
})