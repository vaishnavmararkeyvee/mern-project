import { useState } from "react"

const MyForm=(value)=>{

    const [val,setVal]=useState(value)

    return [val,(event)=>{
        setVal({...val,[event.target.title]:event.target.value})
    }]
}
export default MyForm