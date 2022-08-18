import React,{useRef} from 'react'

export default function index() {
    const ref = useRef()
    console.log("The ref",ref)
  return (
    <div ref={ref}>index</div>
  )
}
