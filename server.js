const  express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDb = require('./config/connectDb');
const path = require('path')
// const dotenv = require('dotenv');

//config dot env file
dotenv.config();

//database call
connectDb();

//rest api
const app = express();

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors());

//routes
//user routes
app.use('/api/v1/users', require('./routes/userRoutes'))

//transection routes
app.use('/api/v1/transections', require('./routes/transactionRoutes'))

//static file
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})
//port
const PORT = 8080 || process.env.PORT

//listen server
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})