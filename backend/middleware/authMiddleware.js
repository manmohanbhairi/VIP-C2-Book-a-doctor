const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next)=>{

try{


console.log(
"AUTH HEADER:",
req.headers.authorization
);



const token =
req.headers.authorization?.split(" ")[1];


console.log(
"TOKEN:",
token
);



const verified =
jwt.verify(
token,
process.env.JWT_SECRET
);


console.log(
"USER:",
verified
);



req.user = verified;


next();


}

catch(error){

console.log(
"JWT ERROR:",
error.message
);


res.status(401).json({
message:"Invalid token"
});


}


};


module.exports = authMiddleware;