import React ,{useState} from 'react'
export default function Hsi() {
    const[name,setName] = useState('')
    const handleonclick =(e)=>{
        console.log("changing");
        setName(e.target.value)
        console.log({name})
    }
    // const handleUp = () =>{
    //    //console.log("by clicking the button click me u will enter the") 
    // }
  return (
    <div>
        <textarea text="enter  the value " onChange={handleonclick}></textarea>
      <button type="Submit" >Click me</button>
    </div>
  )
}
