import './index.css';
import { useState } from 'react';
import { login } from './utils';
const Login = () =>{
    const [username,setUserName]=useState('');
    console.log(username);
    const [password,setPassword]=useState('');
    console.log(password);
    const handleLogin=async(event)=>{
        event.preventDefault();
        const results =await login({username,password});
        console.log({results});
    };
    return(
        <div>
            <form onSubmit={handleLogin}>
            <br></br>
            <button type='submit'>Login</button>
                <h2>Login</h2>
            <input placeholder="Enter Username" type="text" onChange={(event)=>setUserName(event.target.value)}/>
            <br></br>
            <input placeholder="Enter Password" type="password" onChange={(event)=>setPassword(event.target.value)}/>
            
            </form>
        </div>
    )
}
export default Login;

