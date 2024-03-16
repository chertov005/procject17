window.addEventListener('load' ,()=> {

    doGetApi()

});



const doGetApi = async() => {

    let url = `https://procject17.onrender.com/users/info` ;
    fetch(url,{
        method:'GET' ,
        headers:{'x-api-key':localStorage['user']}
    }) 
    .then(resp => resp.json())
    .then(data => {

        console.log(data)

    })


}