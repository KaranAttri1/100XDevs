import axios from 'axios';
import {atom,selector} from 'recoil'

export const navbarAtom = atom({
    key:"navbarAtom",

    // default value has to be synchronous => so, use a SELECTOR(which can be async) in order to get default value from api call
    
    // earlier ( w/o selector ), we see a flash of default values and then values from backend
    // now with selector there is a flash but is of complete white screen i.e nothing renders, i.e.w. we dont see a flash on screen
    default:selector({
        key:"navbarGet",
        get: async ()=>{
            const res = await axios.get('http://localhost:8080/notifications');
            return res.data;
        }
})
})

// Selector => here show sum of network + notifications over Me button

export const meSum = selector({
    key:"meSelector",
    get:({get}) => {
        const navbar = get(navbarAtom)
        return navbar.network + navbar.jobs + navbar.messaging + navbar.notifications;
    }
})