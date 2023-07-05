const staticData = require('../staticData');
var roomData = staticData.roomData;
var bookingData = staticData.bookingData;

// API TO GET ALL THE ROOMS
module.exports.getRoomData = (req, res, next)=>{
try{
  res.send(roomData);
} catch(err){
    consolee.log(err);
    res.status(500).send(err);
}

}

//API TO CREATE A ROOM
/*{
  "room":
  {
      "numberOfSeats": 500,
      "amenities": "Central AC, Catering services, Decorators",
      "price" : "Rs 8,00,000"
  }
}*/
module.exports.createRoom = (req, res, next)=>{
  try{
    const newRoomId= roomData[roomData.length-1].roomId +1;
     console.log(newRoomId);
     console.log(req.body);

    let newRoomName;
    if(req.body.room.price<=3,00,000)
    newRoomName="Basic";
    else if (req.body.room.price>3,00,000 && req.body.room.price<=6,00,000)
    newRoomName="Regular";
    else
    newRoomName="Luxury";

    req.body.room.roomId=newRoomId;
    req.body.room.roomName = newRoomName;
    //req.body.room.bookingStatus = "Available";
    
    const insertedData = roomData.push(req.body.room);
    res.send(roomData);
    console.log(insertedData);
  } catch(err){
      console.log(err);
      res.status(500).send(err);
  }
  }

// API TO BOOK A ROOM
  /*
  {
    "bookinginfo":
    {
        "customerName" : "V",
        "date" :"05/21/2023",
        "startTime" : "14:00:00",
        "endTime" : "17:00:00",
        "roomId" :"3"
    }
}
  */

  module.exports.bookRoom = (req,res,next) =>{

    try{
      const newBookingId = bookingData[bookingData.length-1].bookingId +1;
      var bookingFlag ;

      bookingData.forEach((data)=>{
       
        console.log(data.customerName)
       if(req.body.bookinginfo.roomId ==  data.roomId)
       {
        
          if (new Date(req.body.bookinginfo.date).getTime() ===  new Date(data.date).getTime())  
          {
          if (data.startTime < req.body.bookinginfo.startTime  && req.body.bookinginfo.startTime < data.endTime){
            console.log("time 1")
           bookingFlag='no'
          }    
          else if (data.startTime > req.body.bookinginfo.startTime  &&  data.startTime < req.body.bookinginfo.endTime)
            
          {
            console.log("time 2")
            bookingFlag='no'
          }
          }
       }
      })

      if(bookingFlag=="no")
      {
       res.send("Sorry the room has been booked for the given date and time")
      }
      else{
      req.body.bookinginfo.bookingId = newBookingId;
      req.body.bookinginfo.bookingStatus = "Booked"
      bookingData.push(req.body.bookinginfo);
      return res.send(bookingData);
      }

    }catch(err) {
      console.log(err);
      res.status(500).send(err);
    }
  }

 //API TO GET ROOM BOOKING DATA
  module.exports.getRoomBookingData = (req,res,next) =>{
       
     let roomBookingData = [];
     var roomBookingObj ={};
     var unBookedFlag ;

    try{     
      roomData.forEach((room)=>{
        unBookedFlag = "true";
        bookingData.forEach((data) => {
          if(room.roomId == data.roomId){
             roomBookingObj ={
               roomName: room.roomName,
               bookingStatus : data.bookingStatus,
               customerName: data.customerName,
               date: data.date,
               startTime: data.startTime,
               endTime: data.endTime
            }
            unBookedFlag = "false";
            roomBookingData.push(roomBookingObj);
          }
        })

        if(unBookedFlag== "true"){
          
         roomBookingObj= {
             roomName : room.roomName,
             bookingStatus : room.bookingStatus,
             customerName: "-",
             date: "-",
             startTime: "-",
             endTime: "-"
         }
        roomBookingData.push(roomBookingObj);
       } 
      })  
        res.send(roomBookingData);
    }catch(err)
    {
        console.log(err);
        res.status(500).send(err);
    }
  }

// API TO GET ALL CUSTOMERS WITH THEIR BOOKING INFO
  module.exports.getAllCustomersData = (req,res,next) => {
    
    let customerData = [];
    let customerObj ={};

    try{

      bookingData.forEach((data) => {

        roomData.forEach((room)=>{
          if(room.roomId=data.roomId){

            customerObj = {

              customerName: data.customerName,
              roomName : room.roomName,
              date: data.date,
              startTime: data.startTime,
              endTime : data.endTime
        }
      }
      })
      customerData.push(customerObj);
      })
       res.send(customerData);
    }catch(error){
      console.log(error);
    }
  }


//API TO GET BOOKING INFO OF A PARTICULAR CUSTOMER
  module.exports.getcustomerinfo = (req,res,next) => {

    let customerinfo = [];
    let customerObject = {};
    console.log("API get customerinfo hit",req.params.customerName)

    try{

       bookingData.forEach((data) =>{
          console.log(data);
           if(data.customerName === req.params.customerName){

               roomData.forEach((room) =>{
                console.log("...",room);
                if(room.roomId == data.roomId){

                  customerObject = {
                    customerName : data.customerName,
                    roomName : room.roomName,
                    date : data.date,
                    startTime : data.startTime,
                    endTime : data.endTime,
                    bookingId: data.bookingId,
                    bookingDate : data.date,
                    bookingStatus: data.bookingStatus
                  }
                 customerinfo.push(customerObject);
                  console.log("-------pushed", room.roomId)
                }       
               })
           }
       })

       res.send(customerinfo);
    } catch(err){

      console.log(err);
    }



  }
