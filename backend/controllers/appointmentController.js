const Appointment = require("../models/Appointment");


// Book appointment
exports.bookAppointment = async (req,res)=>{

try{

const {
 patientId,
 doctorId,
 appointmentDate
}=req.body;


const appointment =
await Appointment.create({

patientId,
doctorId,
appointmentDate,
status:"Booked"

});


res.status(201).json({

message:"Appointment booked successfully",

appointment

});


}
catch(error){

console.log(error);

res.status(500).json({

message:error.message

});

}

};



// Get appointments

exports.getAppointments = async(req,res)=>{

try{


const appointments =
await Appointment.find()
.populate("patientId")
.populate("doctorId");


res.json(appointments);


}
catch(error){

res.status(500).json({

message:error.message

});

}

};



// Cancel appointment

exports.cancelAppointment =
async(req,res)=>{

try{


const appointment =
await Appointment.findByIdAndUpdate(

req.params.id,

{
status:"Cancelled"
},

{
new:true
}

);


res.json({

message:"Appointment cancelled",

appointment

});


}
catch(error){

res.status(500).json({

message:error.message

});

}

};



// Approve appointment

exports.approveAppointment =
async(req,res)=>{

try{


const appointment =
await Appointment.findByIdAndUpdate(

req.params.id,

{
status:"Approved"
},

{
new:true
}

);


res.json({

message:"Appointment approved",

appointment

});


}
catch(error){

res.status(500).json({

message:error.message

});

}

};