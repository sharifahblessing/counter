import mongoose from "mongoose"

const connectdb = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}

export default connectdb;