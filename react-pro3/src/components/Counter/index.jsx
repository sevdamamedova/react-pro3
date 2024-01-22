import { useState } from "react"
import Button from "../Button"
export default function Counter(){
    const[count, setCount] = useState(0)
    return(
        <>
        <h1>{count}</h1>
        <Button title="+" onClick={()=>setCount(count+1)}/>
        <Button title="-" onClick={()=>setCount(count-1)}/>
        <Button title="reset" onClick={()=>setCount(0)}/>
        <Button title="special" onClick={()=>setCount(+prompt('Ededi daxil et'))}/>
        <Button title="console" onClick={()=>console.log(count)}/>
        
        </>
    )
}