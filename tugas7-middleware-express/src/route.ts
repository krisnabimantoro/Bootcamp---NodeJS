import express from "express";

import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";


const router = express.Router();


router.post("/upload/single", single, async(req, res) => {
  const file = req.file

  if (file) {
    try {
      const result = await handleUpload(file.buffer)
      res.status(200).send(result)
      
    } catch (error) {
       res.status(500).send({ error: 'Upload failed' });
    }
   
  }else{
    res.status(400).send({ error: 'No file uploaded' })
  }

  
});
router.post("/upload/multiple", multiple, async(req, res) => {
  const files = req.files as Express.Multer.File[];

  if (files && files.length > 0) {
    try {
      const uploadPromises = files.map(file => handleUpload(file.buffer));  
      const results = await Promise.all(uploadPromises);
      res.status(200).send(results);
    } catch (err) {
      res.status(500).send({ error: 'Upload failed' });
    }
  } else {
    res.status(400).send({ error: 'No files uploaded' });
  }
});



export default router;
