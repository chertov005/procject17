window.addEventListener('load',async() => {

    doApiGetList();
    declareEvent();
});



const doApiGetList  = async() =>{


    let url = `https://procject17.onrender.com/foods`
    
    fetch(url ,{
        method:'GET',
        headers:{
            'content-type':'application/json' ,
            'x-api-key':localStorage['user']
        }
    })
    .then(resp => resp.json())
    .then(data => {
        
        console.log(data);
        
        doArrayList(data);
        
    });
    
    
};




const doPostMethod = async(_obj) => {
    
    let url = `https://procject17.onrender.com/foods`
    fetch(url , {
        method:'POST' ,
        body:JSON.stringify(_obj) ,
        headers: {
            'content-type':'application/json' ,
            'x-api-key':localStorage['user']
        }
    })
    .then(resp => resp.json())
    .then(data => {

        if(data._id) {
            doApiGetList()
        }

    })
    


};







const doDeleteMethod = async(_id) => {

    let url = `https://procject17.onrender.com/${_id}`
    fetch(url ,{
        method:'DELETE' ,
        headers:{
            'content-type':'application/json' ,
            'x-api-key':localStorage['user']
        }
    })
    .then(resp => resp.json())
    .then(data => {

        console.log(data)

        if(data.deletedCount == 1) {
            doApiGetList()
        }

    });

}




const doArrayList = (_array) => {

    document.querySelector('#id_ul').innerHTML = '';

    for(let i = 0 ; i < _array.length ; i++) {

        let item = _array[i] ;

        console.log(item)

        let li = document.createElement('li');
        li.className ='list-group-item border-bottom p-1' ;

        document.querySelector('#id_ul').append(li) ;

        li.innerHTML += `<button class="btn btn-dark  mt-1 btnD">x</button>  name: ${item.food} , price: ${item.price} nis`;
        
        let btnDelete = li.querySelector('.btnD') ;

        btnDelete.addEventListener('click' , async() => {

            if(confirm(`sure delete ${item.food} ?`)) {

                doDeleteMethod(item._id)



            }

        });
        

    };


};




const declareEvent = () => {

    document.querySelector('#id_form').addEventListener('submit' , (e) => {

        e.preventDefault() ;

        let obj = {
            food:document.querySelector('#id_food').value,
            price:document.querySelector('#id_price').value,
            caloris:document.querySelector('#id_caloris').value,
            img:document.querySelector('#id_img').value
        }

        console.log(obj)

        doPostMethod(obj)

    });

};