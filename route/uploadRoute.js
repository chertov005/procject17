const express = require('express') ;
const router = express.Router() ;
const cloudinary = require('cloudinary').v2


cloudinary.config({ 
    cloud_name: 'dsmpscs8z', 
    api_key: '819334989274365', 
    api_secret: '-8W6MKV60dF29rsxksyjEAZtWZc' 
  });



  router.post('/' , async(req , res) =>{

    try {


      let myFile = req.files.file ;

      let data = await cloudinary.uploader.upload(myFile.tempFilePath , {unique_filename:true}) ;
      return res.status(200) .json(data)

      


    } catch (error) {
        return res.status(500) .json(error)
    }

  });













module.exports = router;