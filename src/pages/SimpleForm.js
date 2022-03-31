import React ,{useState} from "react";
export const SimpleForm = () =>{
    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[agevalidator,setagevalidator] = useState(true)
    var isAgevalid = true;
    const ageBlurhandler = (e)=>{
        console.log("Handler is ")
    }



return(
<div>
    <form>
        <div>
            <label>enter the name </label>
            <input type="text" name ="name" onChange={(e)=>setname(e.target.value)}/>
            {
                name.length > 0 && name.length<3 ? "pls check length": null
            }
        </div>
        <div>
            <label>enter the email</label>
            <input type="text" name ="email" onChange={(e)=>setemail(e.target.value)}/>
            {
                email.length <= 0 ? "pls check length": null
            }
        </div>
        <div>
            <label>enter the age </label>
            <input type="number" name ="age" onChange={(e)=>(e.target.value)}/>
            {
                name.length > 0 && name.length<3 ? "pls check length": null
            }
        </div>
    </form>
</div>



);
}