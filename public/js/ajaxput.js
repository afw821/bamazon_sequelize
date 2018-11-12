(function($){

    $.ajax({
        url: "/api/products/:id",
        method: "PUT"
    }).then(function(responseTwo){
        console.log(responseTwo);
    })




})
