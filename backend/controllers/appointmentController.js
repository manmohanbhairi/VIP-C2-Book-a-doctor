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
await Appointment.find({
    patientId:req.user.id
})
.populate("doctorId")
.populate("patientId");


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
await Appointment.findById(
req.params.id
);


if(!appointment){

return res.status(404).json({
message:"Appointment not found"
});

}



if(
appointment.patientId.toString()
!== req.user.id
){

return res.status(403).json({
message:"Not allowed"
});

}



appointment.status="Cancelled";


await appointment.save();



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