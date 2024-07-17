import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at <http://localhost>:${port}`);
});



const url = 'mongodb+srv://krisnabmntr:PmqcA6ci98MJmsT3@belajar-backend-nodejs.vzey3tq.mongodb.net/?retryWrites=true&w=majority&appName=belajar-backend-nodejs';
const client = new MongoClient(url);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Could not connect to MongoDB', error);
  }
}

connectDB();