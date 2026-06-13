import axios from "axios";

const API = axios.create({

baseURL:
"https://vip-c2-book-a-doctor.onrender.com/api"

});


export default API;