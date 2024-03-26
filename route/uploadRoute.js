const express = require('express') ;
const router = express.Router() ;
const {upLoad} = require('../util/uploadFile')
const path = require('path')

// router.post('/' , async(req , res) => {

//     try {
        
//         let data = await myUploadFile(req ,"file" ,"",4,['.png' ,'.jpg' ,'.jpeg'])
//         return res.json(data)


//     } catch (err) {
//         return res.status(400) .json(err)
//     }

// });




/////////////////////////////////////



// router.post('/' , async(req , res) => {

//     try {

//         let myFiles = req.files.file
//         if(myFiles.size <= 1024*1024*4){

//             let ext_Array = ['.png' ,'.jpg' ,'.jpeg'] ;
//             if(ext_Array.includes(path.extname(myFiles.name))){
//                 myFiles.mv(`public/users/${myFiles.name}` , (err) => {
//                     if(err) {
//                         return res.json(err)
//                     }
    
//                     return res.json({message:'success upload file'})
//                 })

//             }

//             else{
//                 return res.json({message:'format file not allow'})
//             }

         
//         }
//         else{
//             return res.json({message:'file over 4MB'})
//         }

        
//     } catch (error) {
//         return res.status(500).json({message:'there was error with server  , try later...'})
//     }

// })

////////////////////////////////////////////////////////////////////////////////////////////



// router.post('/',async(req , res) => {

//     try {
        
//         let data = await upLoad(req ,"file","",4,[".png",".jpg",".gif",".jpeg"])
//         return res.json(data)

//     } catch (error) {
//         return res.json(error)
//     }

// });




/////////////////////////////////////////////////////



// router.post('/' , async(req ,res) =>{

//     try {

//         let data = await upLoad(req , 'file' , 4 , [".png",".jpg",".gif",".jpeg"] ,'') 
//         return res.status(200) .json(data)
        
//     } catch (error) {
//         return res.json(error)
//     }

// });

////////////////////////////////////////////////////////////////////////////


router.get("/" , async(req , res) => {

    try {

        return res.status(200) .json({message:'rout upload work ok'})
        
    } catch (error) {
        return res.status(500) .json({message:'there was problem with server , try agin later '})
    }

})















module.exports = router;