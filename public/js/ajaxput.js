(function($){

    $.ajax9({
        url: "/api/products/:id",
        method: "put"
    }).then(function(responseTwo){
        console.log(responseTwo);
    })




})
