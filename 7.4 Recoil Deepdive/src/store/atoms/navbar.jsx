import {atom,selector} from 'recoil'

export const networkAtom = atom({
    key:"networkAtom",
    default:102
})

export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})

export const messagesAtom = atom({
    key:"messagesAtom",
    default:0
})

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default:102
})


// Selector => here show sum of network + notifications over Me button

export const meSum = selector({
    key:"meSelector",
    get:({get}) => {
        return get(networkAtom) + get(notificationsAtom) + get(jobsAtom) + get(messagesAtom);
    }
})