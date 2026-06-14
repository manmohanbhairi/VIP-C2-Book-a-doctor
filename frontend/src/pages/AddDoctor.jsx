import {useState} from "react";
import API from "../services/api";


function AddDoctor(){


const [form,setForm]=useState({

name:"",
specialization:"",
location:"",
description:""

});


const submit=async(e)=>{

e.preventDefault();


try{


await API.post(
"/doctors",
form
);


alert("Doctor Added");


}


catch(err){

alert("Failed");

}

};



return (

<div className="container mt-5">


<div className="card p-5">


<h2>
Add Doctor 👨‍⚕️
</h2>


<form onSubmit={submit}>


<input
className="form-control mb-3"
placeholder="Doctor Name"
onChange={
e=>setForm({
...form,
name:e.target.value
})
}
/>



<input
className="form-control mb-3"
placeholder="Specialization"
onChange={
e=>setForm({
...form,
specialization:e.target.value
})
}
/>



<input
className="form-control mb-3"
placeholder="Location"
onChange={
e=>setForm({
...form,
location:e.target.value
})
}
/>



<textarea

className="form-control mb-3"

placeholder="Description"

onChange={
e=>setForm({
...form,
description:e.target.value
})
}

/>



<button className="btn btn-primary">

Add Doctor

</button>


</form>


</div>


</div>

)

}


export default AddDoctor;