import InputMenu from "./components/inputMenu/InputMenu"
import { useState } from "react"


export default function Board(){
    const [isTrue,setIsTrue] = useState(true);
    return <>
        <InputMenu/>
        {/* { isTrue && 
        <TableModal/>
        } */}
    </>
}