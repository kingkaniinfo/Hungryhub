import mongoose from "mongoose";

export const connectDb = async () => {
   await mongoose.connect(process.env.MONGO_URI)
   .then(()=> console.log('MongoDB is connected'))
   .catch((e)=> console.log(`Connectin Error ${e.message}`))
}