import { useState } from "react";
function Child() {
    const [value,setValue]=useState("")
    return (
        <div>
            <h1>{value}</h1>
            <input type="text" value={value} onChange={(evt)=>{
                setValue(evt.target.value)
            }}/>
        </div>
            )


};
            export default Child