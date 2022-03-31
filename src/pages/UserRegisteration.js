import React, { useState } from "react";

export  const UserRegisteration =()=>{
    
    const [username,setusername] = useState('')
    const [useremail,setuseremail] = useState('') 
    const [userpassword,setuserPassword] = useState('')
    const [userage,setuserage] = useState('')
    
    const usernameHandler = (e)=>{
        setusername(e.target.value)
        // username(e.target.value)

    }

    const useremailHandler = (e)=>{

        setuseremail(e.target.value)
        
    }
    const userpasswordHandler = (e)=>{

            setuserPassword(e.target.value)
        
    }
    const userageHandler = (e)=>{

        setuserage(e.target.value)
        
    }
    const submit = (e)=>{

        e.preventDefault()
        alert(`UserName: ${username}\nUserEmail: ${useremail}\nUserPassword: ${userpassword}  \nUserAge: ${userage}`)

    }



        return(
            
         
                <form onSubmit={submit}>     
                <h1>REGISTRATION</h1>           
                    <table>
                        <tr>
                        <td>
                            UserName:<input type ="text" name="UserName" placeholder="Enter the username" onChange={(e)=>usernameHandler(e)} />
                        </td>
                        </tr>
                        <tr>
                        <td>
                            UserEmail:<input type ="text" name="UserEmail" placeholder="Enter the email" onChange={(e)=>useremailHandler(e)}/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                                UserPassword:<input type ="password" name="Password" placeholder="Enter the password" onChange={(e)=>userpasswordHandler(e)}/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                           UserAge:<input type ="number" name="UserAge" placeholder="Enter the your age" onChange={(e)=>userageHandler(e)}/>
                        </td>
                        </tr>
                        <tr>
                        <td>
                            <input type ="submit" />
                        </td>
                        </tr>

                    </table>
                </form>
    );

}