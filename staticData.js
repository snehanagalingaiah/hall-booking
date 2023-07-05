// variable storing all the rooms data
module.exports.roomData= [
    {
        roomId :1,
        roomName : "Basic",
        numberOfSeats: 100,
        amenities: "Central AC, Catering services, Decorators",
        price : "Rs 2,00,000",
    
    },

    {
        roomId :2,
        roomName : "Regular",
        numberOfSeats: 200,
        amenities: "Central AC, Catering services, Decorators, Photography Services",
        price : "Rs 3,50,000"
    
    },

    {
        roomId :3,
        roomName : "Basic",
        numberOfSeats: 50,
        amenities: "Central AC, Catering services, Photography Services, Audio Visual services",
        price : "Rs 1,00,000"
    
    },

    {
        roomId :4,
        roomName : "Regular",
        numberOfSeats: 750,
        amenities: "Central AC, Catering services, Photography Services, Audio Visual services, Decorators, Choreographers",
        price : "Rs 5,00,000"
    
    }
]

//variable storing room booking data
module.exports.bookingData = [
    {
        bookingId:1,
        customerName : "Sasha",
         //mm/dd/yyyy format
        date :"05/02/2023",
        //HH:mm:ss format
        startTime : '08:00:00',
        endTime : '15:00:00',
        roomId :"1",
        bookingStatus:"Booked"
    },

    {
        bookingId:2,
        customerName : "Shiva",
        //mm/dd/yyyy format
        date :"05/21/2023",
        //HH:mm:ss format
        startTime : '07:00:00',
        endTime : '15:00:00',
        roomId :"3",
        bookingStatus:"Booked"
    },

    {
        bookingId:3,
        customerName : "Sasha",
        //mm/dd/yyyy format
        date :"05/23/2023",
        //HH:mm:ss format
        startTime : '07:00:00',
        endTime : '15:00:00',
        roomId :"2",
        bookingStatus:"Booked"
    }


]