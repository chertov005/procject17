
window.addEventListener('load' ,() => {

    doApiGetList()

});



doApiGetList = async() => {


    let url = `https://procject17.onrender.com/cakes`
    fetch(url ,{
        method:'GET' ,
        headers:{
            'content-type':'application/json'
        }
    }) 
    .then(resp => resp.json()) 
    .then(data => {




        arrayList(data)
    });


};


const arrayList = async (_array) => {

    document.querySelector('#id_ul').innerHTML ='';

    for(let i = 0 ; i < _array.length ; i++) {

        let item = _array[i]

        let li = document.createElement('li');
        li.className = 'list-group-item' ;
        document.querySelector('#id_ul').append(li)

        li.innerHTML += `name: ${item.name} <br>info: ${item.info}`


    }

};


