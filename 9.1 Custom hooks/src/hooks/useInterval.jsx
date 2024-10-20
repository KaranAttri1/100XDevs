import { useEffect } from "react"
import { useState } from "react"

export function useInterval(callback,n) {
    useEffect(()=>{
      let timer = setInterval(()=>{
        callback();
      },n*1000)

      return ()=>{
        clearInterval(timer)
      }
    },[callback,n])
  }