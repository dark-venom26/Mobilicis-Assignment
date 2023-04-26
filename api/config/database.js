const mongoose = require("mongoose");

const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

const atlasUri = `mongodb+srv://${username}:${password}@cluster0.cy6s2gc.mongodb.net/Mobilicis?retryWrites=true&w=majority`


const connectDatabase = () =>{
    mongoose.connect(atlasUri, {
        useNewUrlParser:true, useUnifiedTopology:true}).then((data)=>{
        console.log(`Database connected with server: ${data.connection.host}`);
    })
}

module.exports = connectDatabase;