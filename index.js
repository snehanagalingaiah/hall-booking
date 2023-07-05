const express= require('express');
const roomRouter = require('./router/room');
const PORT = 3000

const app = express();

app.use(express.json());

app.use('/', (req,res,next) => {
    console.log("Custom Middleware");   
    next();
 });

app.use('/rooms', roomRouter);

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});