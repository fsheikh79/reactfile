import React from "react";
import axios from "axios";

export const Apidemo = () =>{
    const getdata =() =>{
        axios.get('http://localhost:5000/roles').then(res =>{
            console.log(res);
        })
    }
    const postdata =() =>{
        axios.post('http://localhost:5000/roles').then(res =>{
            console.log(res);
        })
    }

return(
        <div>
            <button onClick={getdata}>Get</button>
            <br></br> 
            <button onClick={postdata}>Post</button>
            </div>

 )
}