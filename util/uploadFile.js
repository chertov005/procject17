
const path = require('path');





// exports.upLoad = (req , key, max_mb,ext_allow =[] ,dest) => {

//     return new Promise((resolve , reject) => {

//         let myFile = req.files[key] ;
//         if(!myFile) {
//             reject({code:'file_sent'})
//         }

//         if(myFile.size <= 1024*1024*max_mb) {

//             let checkExtFile = path.extname(myFile.name)

//             if(ext_allow.includes(checkExtFile)) {

//                 dest = dest != '' ? dest+checkExtFile : myFile.name 

//                 myFile.mv(`public/${dest}` ,(err) => {
//                     if(err) {
//                         return resolve.status(400) .json(err)
//                     }

//                     else{
//                         resolve({message:'file upload' ,fileName:dest })
//                     }

//                 })


//             }


//             else{
             
//                 reject({code:'file_format_error'})
                
//             }


//         }

//         else{
//             reject({code:'size_MAX5MB'})
//         }

//     });

// }




///////////////////////////////////////////////////////////////////

exports.upLoad = (req ,key , max_mb ,allow_ext =[] , dest) => {

    return new Promise((resolve , reject) => {

        let myFile = req.files[key] ;

        if(!myFile) {

            return reject({message:'no sent file' ,code:'file_sent'})

        } 

        if(myFile.size <= 1024*1024*max_mb) {

            let checkExt = path.extname(myFile.name)

            if(allow_ext.includes(checkExt)) {

                dest = dest != '' ? dest+checkExt : myFile.name 

                myFile.mv(`public/${dest}` , (err) => {

                    if(err) {
                        reject(err)
                    }

                    else{
                        resolve({message:'upload file success' ,fileName:dest})
                    }

                });


            }

            else{
                return reject({message:'format error'})
            }



        }

        else{

            return reject({message:'file size error'})
        }




    });


}


/////////////////////////////////////////////////



exports.upLoad = (req , key ,max_mb ,allow_ext=[] ,dest) => {

    return new Promise((resolve , reject) => {

        let myFile = req.files[key] 

        if(!myFile) {
            return reject({message:'no sent file , please send file' , code:'no_file'})
        }

        if(myFile.size <= 1024*1024*max_mb) {

            if(allow_ext.includes(path.extname(myFile.name))) {

                dest = dest != ''  ? dest +path.extname(myFile.name) : myFile.name

                myFile.mv(`public/${dest}` , (err) => {
                    if(err) {
                        return reject(err)
                    }

                    else{ 
                        resolve({message:'success upload file ' , file_name:dest})
                    }
                })

            }
            
            else{
                return reject({message:'file format not allow ' ,code:'ext_file'})
            }



        }

        else{
            return reject({message:'file over 5MB , max 5mb' , code:'size_file'})
        }


    });


};



/////////////////////////////////////////////////////////////



