const express = require('express') ;
const router = express.Router() ;


router.post('/' , async(req , res) => {

    try {
        
        console.log(req.files)


    } catch (error) {
        return res.status(500).json({message:'there error with server'})
    }

});



module.exports = router;