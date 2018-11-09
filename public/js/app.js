// use ajax to request products from /api/products
// render individual products as row in tbody tag



    let queryUrl = 'http://localhost:9095/api/products';

    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).then(function (response) {
        
            console.log(response);
            console.log(response[0]);
        
            for (let i = 0; i < response[i].length; i++) {
                console.log('hello world');
                $('#product-info').html(`
                <tr>
                <th scope="row">${response[i].product_name}</th>
                  <td>${response[i].stock_quantity}</td>
                  <td>${response[i].price}</td>
                  <td><form class="form-inline">
                  <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Select Quantity</label>
                  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="5">Five</option>
                      <option value="10">Ten</option>
                      <option value="15">Fifteen</option>
                  </select>

                  <button type="submit" class="btn btn-primary my-1 addOne">Add to Cart</button>
              </form></td>
                </tr>)`);
            }



    });
    
    































