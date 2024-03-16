window.addEventListener('load' ,()=> {

    declareViewEvent()


});


const doPostApi = async(_body) => {

    let url = `https://procject17.onrender.com/users `
    fetch(url ,{
        method:'POST' ,
        body:JSON.stringify(_body) ,
        headers:{
            'content-type':'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => {

        console.log(data)

        if(data._id) {
            window.location.href = '/html/login.html'
        }

    })


};



const declareViewEvent = async() => {

    document.querySelector('#id_form').addEventListener('submit' , async(e) => {

        e.preventDefault();

        let object = {
            user:document.querySelector('#id_name').value ,
            email:document.querySelector('#id_email').value ,
            password:document.querySelector('#id_password').value 
        }

        console.log(object)

        doPostApi(object)

    });


};


