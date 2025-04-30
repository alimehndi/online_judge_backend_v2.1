import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connection = mongoose.connect(process.env.MONGODB_URL as string);
        console.log(`Mongo DB database connected successfully `)
    } catch (error) {
        console.log(`Error creating database connection :${error}`)
        process.exit(1);
    }
}

export default connectDb;