const express=require('express')
const app=express();
const tasks=require('./routes/tasks');
require('dotenv').config();
app.use(express.json());
const connectDB=require('./db/connect');
app.use('/api/v1/tasks',tasks);

app.use(express.static('./public'))

const port=3000;

const start=async ()=>{
try {
     await connectDB(process.env.mongo_url)
     app.listen(port,()=>{
        console.log('server is listening on port '+port);
    })
    
} catch (error) {
    
    console.log('Something went wrong');
    
}
}
start();

