window.addEventListener('load' ,function(){
    

    declareViewEvent()

    doGetApi()

});



const doPost = async(_body) => {

  let url = `http://127.0.0.1:3003/users/login` || 'https://procject17.onrender.com/users/login '
  
  let resp = await fetch(url ,{

      method:'POST',
      body:JSON.stringify(_body) ,
      headers: {
          'content-type':'application/json'
        }
        
        
    });
    let data = await resp.json()
    
    if(data.token) {
        
        localStorage.setItem('user' , data.token)
        window.location.href ='/html/infoUser.html'
        console.log(data)
        
    }
    
    
};



const doGetApi = async() => {
    
    let url = `http://127.0.0.1:3003/users/`

    fetch(url ,{
        method:'GET',
        headers: {'content-type':'application/json' ,'x-api-key':localStorage['user']}
    })
    .then(resp => resp.json()) 
    .then(data => {


        console.log(data)
        

    });


};




const declareViewEvent = async() => {

    document.querySelector('#id_form').addEventListener('submit' , (e) => {

        e.preventDefault();

        let obj = {

            email:document.querySelector('#id_email').value ,
            password:document.querySelector('#id_password').value 

        };

        console.log(obj);

        doPost(obj)

    });


};


