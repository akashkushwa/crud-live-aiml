const mongoose =require('mongoose');
async function dbConn(){
    const conn=await mongoose.connect('mongodb+srv://akash:root@cluster0.ykxhjdb.mongodb.net/crud-live-c?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log('database connect successfully')

    }
    else{
        console.log('connection fail');
    }
}
module.exports=dbConn;