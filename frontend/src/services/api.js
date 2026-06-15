import axios from "axios";

console.log("API FILE LOADED");

const API = axios.create({

baseURL:
"https://vip-c2-book-a-doctor.onrender.com/api"

});




// send JWT token with every request

API.interceptors.request.use(

(config)=>{


const token =
localStorage.getItem("token");


if(token){


config.headers.Authorization =
`Bearer ${token}`;


}


return config;


},


(error)=>{


return Promise.reject(error);


}


);



export default API;