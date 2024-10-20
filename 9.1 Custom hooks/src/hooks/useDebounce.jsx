import { useEffect } from "react"
import { useState } from "react"

// anytime if value  changes start a clock for delay seconds
export function useDebounce(value,delay) {
    const[debouncedValue, setDebouncedValue] = useState(value)
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setDebouncedValue(value)
        },delay)

        return ()=>{
            clearTimeout(timer)
        }
    },[value])

    return debouncedValue;
  }