window.addEventListener('load' ,()=> {

    doGetApi()

});



const doGetApi = async() => {

    let url = `http://127.0.0.1:3003/users/info` ;
    fetch(url,{
        method:'GET' ,
        headers:{'x-api-key':localStorage['user']}
    }) 
    .then(resp => resp.json())
    .then(data => {

        console.log(data)

    })


}