import { useEffect } from "react"
import { useState } from "react"

export function useDebounce(fetchData,delay) {
    useEffect(()=>{
      let timer = setInterval(()=>{
        callback();
      },n*1000)

      return ()=>{
        clearInterval(timer)
      }
    },[callback,n])

    let timer;
    timer = setTimeout(()=>{
        fetchData()
    },delay)
  }