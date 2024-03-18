const express = require('express') ;
const router = express.Router() ;


// router.post('/' , async(req , res) => {

//     try {
        
//         let myFile = req.files.myFile

//         myFile.mv(`public/image/${myFile.name}` , (err) => {
//             return res.status(401).json(err)
//         })

//         return res.json({message:'success upload file'})



//     } catch (error) {
//         return res.status(500).json({message:'there error with server'})
//     }

// });

/////////////////////////////////////////////////////////////////////////////////////////////'

router.post('/' , async(req , res) => {
    
    try {
    
       let myFile = req.files.myFile ;

       if(myFile.size <= 1024*1024*5) {
        return myFile.mv(`public/image/${myFile.name}`,(err) => {
            if(err) {
                return res.json(err)
            }

            return res.json({message:'success file upload !!'})
        })
        
       }

       else {
        res.json({message:'file over 2mb size error '})
       }

    } catch (error) {
    return res.status(500).json({message:'there error with server'})
        
    }

});



module.exports = router;