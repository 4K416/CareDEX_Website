import React, {useState} from "react";
import "../styles/Login.css";
import user from "../data/user_info.js"

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleUserChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    var true_user = get_user()
    var true_pass = get_pass()

    // Correct login info
    if (true_user === username && true_pass === password){
      setStatus("Successfully Logged In!");
    }
    // Incorrect login info
    else{
      setStatus("Incorrect Username or Password");
    }
    
  };

  const get_user = () => {
    return user.u
  };

  const get_pass = () => {
    return user.p
  };

  return (
    <div className="cover">
        <h1>Login</h1>
        <input type="text" placeholder="username" onChange={handleUserChange} value={username}/>
        <input type="password" placeholder="password" onChange={handlePassChange} value={password} />

        <div className="login-btn" onClick={handleClick}>Login</div>  

        <h2>{status}</h2>
        
    </div>
)
  
}

export default Login;
