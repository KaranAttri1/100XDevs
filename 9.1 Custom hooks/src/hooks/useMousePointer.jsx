import { useEffect } from "react"
import { useState } from "react"

export function useMousePointer() {
    const[mousePosition,setMousePosition] = useState({x:0,y:0});

    let handleMouseMove = (e)=>{
        setMousePosition({
            x:e.clientX,
            y:e.clientY 
        })
    }
    useEffect(()=>{
      window.addEventListener('mousemove',handleMouseMove)

      return ()=>{
        window.removeEventListener('mousemove',handleMouseMove)
      }
    },[])
    return mousePosition;
  }