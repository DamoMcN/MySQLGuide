$(document).ready(function() {

    // ----SyntaxContainer----
    $('.h3SyntaxContainer').on('click', function() {
        $(this).next('.activePara').slideToggle('slow');
        $(this).toggleClass('h3SyntaxContainerActive');
    });
    $('.h3SyntaxContainer').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.05)');
        $(this).css('border', '2px solid #E98E00');
    });
    $('.h3SyntaxContainer').on('mouseleave', function() {
        $(this).css('transform', 'scale(1)');
        $(this).css('border', 'none');
    });
    $('#SyntaxButton').on('click', function() {
    $(this).parent().parent().hide(500);
    $('.Syntax').css('display', 'flex');
    
    });
    $('#returnButton').on('click', function() {  
        $(this).parent().prev().children('.cardRow').show(500);
    });
    // ----SyntaxContainerEND----

    $('.cardButton').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.05)');
        $(this).css('box-shadow', '0 0 5px #08090A');
    });
    $('.cardButton').on('mouseleave', function() {
        $(this).css('transform', 'scale(1)');
        $(this).css('box-shadow', 'none');
    });
    
});
