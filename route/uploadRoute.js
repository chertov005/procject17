const express = require('express') ;
const router = express.Router() ;
const path = require('path');



/////////////////////////////////////////////////////////////////////////////////////////////'

router.post('/' , async(req , res) => {
    
    try {

        let myFile = req.files.myFile ;
        if(myFile.size <= 1024*1024*5) {

            let extsArray = ['.jpg','.jpeg','.jfif','.pjpeg','.pjp']
            let checkExtsFile = path.extname(myFile.name)

            if(extsArray.includes(checkExtsFile)) {
                myFile.mv(`public/image/${myFile.name}` , (err) => {

                    if(err) {
                        return res.json(err)
                    }
    
                    return res.json({message:'success upload file'})
                    
                })

            }

            else{
                res.json({message:'exts File not allow , only image '})
            }

         
        }
        
        else{
            
            return res.json({message:'file over 5MB , max you can upload 5MB'})
        }
       

    } catch (error) {
    return res.status(500).json({message:'there error with server'})

    }

});
//////////////////////////////////////////////////////////////////////////////////





module.exports = router;