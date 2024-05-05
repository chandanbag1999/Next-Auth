import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (error) => {
            console.log('MongoDB connection error, please make sure MongoDB is up and running: ' + error);
            process.exit();
        })
    } catch (error) {
        console.log('Something went wrong in connecting to the database');
    }
}