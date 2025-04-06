import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})