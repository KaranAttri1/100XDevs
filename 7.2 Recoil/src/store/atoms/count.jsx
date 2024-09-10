import { atom } from 'recoil';

export const countAtom = atom({
    key:"count",
    default:0
})

const todoAtom = atom({
    key: "todo",
    default:{}
})