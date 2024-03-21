
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// window.addEventListener('load', async() => {

//     declareViewEvent()

// });



// const diApiUpload = async(_body) => {

//     let url = 'http://127.0.0.1:3000/upload'
//     let resp = await fetch(url ,{
//         method:'POST' ,
//         body:_body
//     })  
//     let data = await resp.json()

//     console.log(data)

// };










// const declareViewEvent = () => {

//     let id_form = document.querySelector('#id_form') ;

//     id_form.addEventListener('submit' , async(e) => {

//         e.preventDefault() ;

      
//         let myDataForm = new FormData() ;
//         myDataForm.append("myFile" ,document.querySelector('#inp_file').files[0])



//         diApiUpload(myDataForm)
        

//     });

// };

//////////////////////////////////////////////////////////////////////////////////////////////////


// window.addEventListener('load',()=> {

//     declareViewEvent();

// });



// const doApiFileUpload = async(_body) => {

//     let url = 'http://127.0.0.1:3000/upload';
//     let res = await fetch(url ,{
//         method:'POST',
//         body:_body
//     })
//     let data = await res.json()

//     console.log(data)



// };


// const declareViewEvent = async() => {

//     document.querySelector('#id_form').addEventListener('submit' , (e) => {

//         e.preventDefault();

//         let myData = new FormData();

//         myData.append('file' , document.querySelector('#inp_file').files[0])

//         doApiFileUpload(myData);


//     });


// }


//////////////////////////////////////////////////////////////////////////////



window.addEventListener('load' , ()=>{


    declareViewEvent();

});





const doApiUpload = async(_body) => {

    let resp = await fetch(`http://127.0.0.1:3000/upload` , {
        method:'POST' ,
        body:_body 
    }) ;
    let data = await resp.json()

    console.log(data)

};




const declareViewEvent = ()=> {

    document.querySelector('#id_form').addEventListener('submit' , async(e) => {

        e.preventDefault() ;

        let formMyData = new FormData() ;

        formMyData.append('file' , document.querySelector('#inp_file').files[0])

        doApiUpload(formMyData)

    });


};