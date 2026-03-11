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
    $('#syntaxButton').on('click', function() {
    $(this).parent().parent().hide(500);
    $('.Syntax').css('display', 'flex');
    $('#syntaxBtn').show(500); // Needed on every card button
    
    });
    $('#syntaxBtn').on('click', function() {  
        $(this).parent().prev().children('.cardRow').show(500);
        $(this).hide(500);
        $(this).parent().hide(500); 
    });
    // ----SyntaxContainerEND----

     // ----LingoContainer----

    $('#lingoButton').on('click', function() {
    $('#menuCards').hide(500);
    $('.Lingo').css('display', 'flex');
    $('#lingoBtn').show(500); // Needed on every card button
    });

    $('.cardButton').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.05)');
        $(this).css('box-shadow', '0 0 5px #08090A');
    });
    $('.cardButton').on('mouseleave', function() {
        $(this).css('transform', 'scale(1)');
        $(this).css('box-shadow', 'none');
    });

    $('#lingoBtn').on('click', function() {  
        $('#menuCards').show(500);
        $(this).parent().hide(500);
        $(this).hide(500); 
    });
     // ----LingoContainerEND----
});
