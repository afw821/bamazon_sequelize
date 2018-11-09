// use ajax to request products from /api/products
// render individual products as row in tbody tag



let queryUrl = 'http://localhost:9095/api/products';

$.ajax({
    url: queryUrl,
    method: 'GET'
}).then(function (response) {

    console.log(response);
    console.log(response[0].stock_quantity);

    for (let i = 0; i < response.length; i++) {
        console.log('hello world');
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
      <input type="text" class="form-control mb-2" class="inlineFormInput" placeholder="Qty">
    </div>
                  <button type="submit" value="submit" class="btn btn-primary my-1 addOne">Add to Cart</button>
              </form></td>
                </tr>)`);

        $('addOne').on('click', function () {
            console.log("herp derp");
            $('#inlineFormInput').empty("");
            $('inlineFormInput').val("", function () {
                $("#cart-table").append(`
                        <tr>
                        <th>${response[i].product_name}</th>
                          <td>$${response[i].price}.99</td>
                          <td>"value from input field"</td></tr>`);
            })

        });
    }



});


// (function ($) {
//     const addToCart = function () {
// $('.inlineFornInput').val("").appendTo('#cart-table');
//     }
//     $('.addOne').on('click', addToCart);

// });






























