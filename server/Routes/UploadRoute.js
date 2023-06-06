const express=require('express')
const router =express.Router()
const multer=require('multer')
const {registerDefinition} = require("swaggiffy");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/image");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
const upload = multer({ storage: storage });


router.post("/", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });
  registerDefinition(router, {tags:'upload', mappedSchema:'upload',basePath:'/upload'})

module.exports=router