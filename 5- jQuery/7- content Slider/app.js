$(document).ready(() => {
    $('.slide:gt(0)').hide();
    /*
        - The :gt() selector selects elements with an index number higher than a specified number.
        - The index numbers start at 0.
        - Syntax : $(":gt(index)")
    */
    setInterval(function () {
        $('.slide:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('.slider');
    }, 2500)
})