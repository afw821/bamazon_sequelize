$(function () {
    const myFunction = function () {
        const productId = $(this).attr("data-productId");
        const stockQuantity = $(`input#product-${productId}`).val();
        const product = $(this).attr('data-ProdName');
        const department = $(this).attr('data-department');
        const price = $(this).attr('data-Price');
        const updatedProduct = {
            product_name: product,
            department_name: department,
            price: price,
            stock_quantity: stockQuantity
        };
        
        $.ajax({
            url: "/api/products/:id",
            method: "PUT",
            data: updatedProduct
        }).then(function (responseTwo) {
            console.log(responseTwo);
            //when the checkout button is clicked, the quatity (stock_quantity) of the specific
            //item is updated in the overall inventory
        })

    }
    $('.checkout-button').on('click', myFunction);
});
