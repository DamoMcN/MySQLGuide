$(document).ready(function() {
    $('.h3Container').on('click', function() {
        $(this).next('.activePara').slideToggle('slow');
        $(this).toggleClass('h3ContainerActive');
    });
    $('.h3Container').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.05)');
        $(this).css('border', '2px solid #E98E00');
    });
    $('.h3Container').on('mouseleave', function() {
        $(this).css('transform', 'scale(1)');
        $(this).css('border', 'none');
    });


});
