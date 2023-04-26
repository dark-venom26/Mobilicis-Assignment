const app = require("./app");

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path: "api/config/config.env"
    });
}

// Connecting to database
const connectDatabase = require("./config/database.js");

connectDatabase();

const port = process.env.PORT;

const server = app.listen(process.env.PORT||4000, ()=>{
    console.log(`Server is working on http://localhost:${port}`);
})

// Unhandled Promise Rejection
process.on("unhandledRejection", (err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    });
})