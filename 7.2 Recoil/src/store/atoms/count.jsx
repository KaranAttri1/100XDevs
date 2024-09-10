import { atom, selector } from 'recoil';

export const countAtom = atom({
    key:"count",
    default:0
})

const todoAtom = atom({
    key: "todo",
    default:{}
})

// Selector in Recoil
export const evenSelector = selector({
    key: 'evenSelector',

    get:(props) => { // here we write our derivation logic
        const count = props.get(countAtom);
        return count % 2 == 0 ;

    }
})