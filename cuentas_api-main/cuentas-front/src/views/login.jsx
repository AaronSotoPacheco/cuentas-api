import React, {useState} from "react";
import '../css/login.css';
export default function Login(){
const[email, setEmail] = useState("admin@gmail.com");
const[password, setPassword] = useState("123");

const submit=async (e)=>{

e.preventDefault();
try{
    const res = await fetch ("http://localhost:8000/api/login",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email:email,
            password:password
        })
    })
    const data = await res.json();
    console.log ("respuesta", data);
}catch(err)
{
    console.error(err);
    
}
}

return (<>


  <div className="scanlines"></div>

<div className="container d-flex justify-content-center align-items-center" style="height: 100vh;">
  <div className="card-hacker col-10 col-sm-7 col-md-4">
    
    <h2 className="text-center mb-4 glitch" data-text="LOGIN">LOGIN</h2>

    <form onSumbit={submit}>
      <div className="mb-3">
        <label className="form-label">Usuario</label>
        <input type="text" className="form-control"
        value={email} onChange={(e) => setEmail(e.target.value)}
        placeholder="root@inferno"/>

      </div>

      <div className="mb-3">
        <label className="form-label" 
        value={password} onChange={(e) => setPassword(e.target.value)}
        >Contraseña</label>
        <input type="password" className="form-control" placeholder="********"/>
      </div>

      <button type="submit" className="btn btn-hacker w-100 mt-2">Acceder</button>

      <div className="text-center mt-3">
        <a href="#">Recuperar acceso del inframundo</a>
      </div>
    </form>
  </div>
</div>



</>)

}