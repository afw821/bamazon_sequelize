/*This function hides the inventory and shows the cart when the view
 cart button is clicked */
(function ($) {
    const hideJumbotron = function () {
        $('.bye-bye').addClass('hide');
        $('.hello').removeClass('hide');
        $('.checkout').addClass('hide');
    }
    $('.view-cart').on('click', hideJumbotron);

    /* This function hides the cart and shows the inventory when the back button is clicked */
    const hideCart = function () {
        $('.hello').addClass('hide');
        $('.bye-bye').removeClass('hide');
        $('.checkout').addClass('hide');
    }
    $('.view-inventory').on('click', hideCart);

    /* This function hides the cart and jumbotron and shows the checkoutpage */
    const showCheckout = function () {
        $('.hello').addClass('hide');
        $('.bye-bye').addClass('hide');
        $('.checkout').removeClass('hide');
    }
    $('.view-checkout').on('click', showCheckout);
})(jQuery);