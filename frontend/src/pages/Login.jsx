import { useState } from "react";
import API from "../services/api";
import { Link,useNavigate } from "react-router-dom";


function Login(){

const navigate = useNavigate();


const [form,setForm]=useState({
email:"",
password:""
});


const handleSubmit = async(e)=>{

e.preventDefault();


try{


const res =
await API.post("/auth/login",form);


localStorage.setItem(
"token",
res.data.token
);


localStorage.setItem(
"user",
JSON.stringify(res.data.user)
);


if(res.data.user.role === "admin"){

  navigate("/admin");

}
else{

  navigate("/dashboard");

}

}
catch(error){

alert(
error.response?.data?.message ||
"Login Failed"
);

}

};



return (

<div className="container mt-5">


<div className="row justify-content-center">


<div className="col-md-5">


<div className="card p-5">


<h2 className="text-center mb-4">
🩺 Login
</h2>


<form onSubmit={handleSubmit}>


<input

className="form-control mb-3"

type="email"

placeholder="Email"

onChange={
e=>setForm({
...form,
email:e.target.value
})
}

/>



<input

className="form-control mb-3"

type="password"

placeholder="Password"

onChange={
e=>setForm({
...form,
password:e.target.value
})
}

/>



<button

className="btn btn-primary w-100"

>

Login

</button>


</form>



<p className="text-center mt-3">

Don't have account?

<Link to="/register">

 Register

</Link>

</p>


</div>


</div>


</div>


</div>

);


}


export default Login;