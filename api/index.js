import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import postrouter from './Routes/Postroute.js';
import Hwmodel from './models/hwmodel.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.post('/return',async(req,res)=>{
    try{
      const {_id}=req.body;
      const data= await Hwmodel.findById(_id);
      console.log(data);
      data.returned=!data.returned;
      data.save().then(
        res.json({message:"changed"})
      )
    }catch{
      console.log(Error);
    }
})


app.delete('/delete', async (req, res) => {
  try {
      const { _id } = req.body;
  
      const deletedData = await Hwmodel.findByIdAndDelete(_id);
      
      if (deletedData) {
          res.status(200).send('Document deleted successfully');
      } else {
          res.status(404).send('Document not found');
      }
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

app.get('/add', async (req, res) => {
  try {
    const data = await Hwmodel.find();
    res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });


app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});


app.use('/', postrouter);
