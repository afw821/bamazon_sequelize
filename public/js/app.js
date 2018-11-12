
$(function () {
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (response) {



        for (let i = 0; i < response.length; i++) {

            $('#product-info').append(`
            <tr>
            <th>${response[i].product_name}</th>
              <td>${response[i].stock_quantity} units</td>
              <td>$${response[i].price}.99</td>
              <td><form class="form-inline">
              <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Enter Quantity</label>
              <form>
            <div class="form-row align-items-center">
            <div class="col-auto">
             <label class="sr-only" for="inlineFormInput">Quantity</label>
            <input type="text" class="form-control mb-2 inlineFormInput" placeholder="Qty">
            </div>
              <button data-ProdName=${response[i].product_name} data-Quant=${response[i].stock_quantity} data-Price=${response[i].price} type="submit" value="submit" class="btn btn-primary my-1 addOne">Add to Cart</button>
          </form></td>
            </tr>)`);

        }



    });
    const addToCart = function () {
        let itemName = $(this).attr("data-ProdName");
        let itemPrice = $(this).attr('data-Price');
        let userQuantity = $('.inlineFormInput').val();

        $('#cart-table').append(` 
        <tr>
        <th class="cart-item">${itemName}</th>
          <td class="cart-price">$${itemPrice}.99</td>
          <td class="cart-quantity">${userQuantity}</td>
          </tr> `);
          $('.button-div').empty();
          $('.button-div').append(`<button type="submit" class="btn btn-primary my-1 checkout-button addCart"> Click to Checkout</button>`);

    }
    $("#product-info").on("click", ".addOne", addToCart);

    const emptyCart = function (){
        $('.cart-item').empty();
        $('.cart-price').empty();
        $('.cart-quantity').empty();

    }
   $('.empty-cart').on('click', emptyCart);
  

    const addToCheckout = function () {
        let item = $(this).attr('data-ProdName');
        let price = $(this).attr("data-Price");
        let quantity= $(".inlineFormInput").val();
        console.log('hello');

        $('#checkout-table').append(`<tr>
        <th>${item}</th>
          <td>$${price}.99</td>
          <td>${quantity}</td>
          </tr>`);
        
    }
    $('.button-div').on('click', '.checkout-button', addToCheckout);




    //You want to capture the values in 

});


// use ajax to request products from /api/products
// render individual products as row in tbody tag


//ajax request from api retrieving: product, stock quantity, and price
//append data from ajax request to table dynamically
//capture user quantity desired from input field
//on click of add to cart button: take values captured, and corresponding product data to cart table

// 
//     const addToCart = function () {
// $('.inlineFornInput').val("").appendTo('#cart-table');
//     }
//     $('.addOne').on('click', addToCart);

// });






























