
$(function () {
    $.ajax({
        url: '/api/products',
        method: 'GET'
    }).then(function (response) {
//Loops through the response and dynamically adds the information on the product selection page
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
              <button data-ProdName=${response[i].product_name} data-Quant=${response[i].stock_quantity} data-Price=${response[i].price} data-userQuant=${i} type="submit" value="submit" class="btn btn-primary my-1 addOne">Add to Cart</button>
          </form></td>
            </tr>)`);
        }
    });
    //This function adds items selected to the cart and appends them to the table
    const addToCart = function () {
        let itemName = $(this).attr("data-ProdName");
        let itemPrice = $(this).attr('data-Price');
        let userQuantity = $('.inlineFormInput').get($(this).attr('data-userQuant')).value;

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

//This function empties the items in the cart when empty cart button clicked
    const emptyCart = function () {
        $('.cart-item').empty();
        $('.cart-price').empty();
        $('.cart-quantity').empty();

    }
    $('.empty-cart').on('click', emptyCart);


//This function adds to the cart count on the home oage when add to car is clicked
    let count = 0;
    $("#product-info").on('click', '.addOne', function () {
        count++;
        $(".cart-counter").html(count);
    });
    

//This function adds items from the cart to the checkout screen when click to checkout is clicked
    const addToCheckout = function () {
        let item = $('.addOne').attr('data-ProdName');
        let price = $('.addOne').attr("data-Price");
        let quantity = $(".inlineFormInput").get($('.addOne').attr('data-userQuant')).value;

        $('#checkout-table').append(`<tr>
        <th>${item}</th>
          <td>$${price}.99</td>
          <td>${quantity}</td>
          </tr>`);
    }
    $('.button-div').on('click', '.addCart', addToCheckout);

});
































