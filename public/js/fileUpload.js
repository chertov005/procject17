
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



window.addEventListener('load' , () => {

    declareViewEvent()

});



const diApiUpload = async(_body) => {

    let url = 'http://127.0.0.1:3000/upload'
    let resp = await fetch(url ,{
        method:'POST' ,
        body:_body
    })  
    let data = await resp.json()

    console.log(data)

};










const declareViewEvent = () => {

    let id_form = document.querySelector('#id_form') ;

    id_form.addEventListener('submit' , async(e) => {

        e.preventDefault() ;

        let inp_file = document.querySelector('#inp_file').files[0]

        let myDataForm = new FormData() ;
        myDataForm.append("myFile" ,inp_file)



        diApiUpload(myDataForm)
        

    });

};