    const express=require('express');
    const dotenv = require('dotenv').config();
    const connectDB=require('./Config/DBConfig');
    const cors = require('cors');
    const LogSign = require('./routes/Backend');
    // require('./Database/Config');
    const app = express();
    const port=process.env.PORT || 80;

    app.use(express.json());                // Middleware
    app.use(cors());                // Middleware
    app.use(LogSign);                // Middleware




    const startServer=async()=>{
        try {
            await connectDB();
            app.listen(port,()=>{
                console.log(`Server runnning on port ${port}`);
            });
        } catch (error) {
            console.log(error);
        }
    }
    startServer();