$(document).ready(function() {
    $('.h3statmentsContainer').on('click', function() {
        $(this).next('.activePara').slideToggle('slow');
        $(this).toggleClass('h3statmentsContainerActive');
    });
    $('.h3statmentsContainer').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.05)');
        $(this).css('border', '2px solid #E98E00');
    });
    $('.h3statmentsContainer').on('mouseleave', function() {
        $(this).css('transform', 'scale(1)');
        $(this).css('border', 'none');
    });
    $('#stickyHeader').on('click', function() {
        $('.statments').css('display', 'flex');
    });

    $('.cardButton').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.05)');
        $(this).css('box-shadow', '0 0 5px #08090A');
    });
    $('.cardButton').on('mouseleave', function() {
        $(this).css('transform', 'scale(1)');
        $(this).css('box-shadow', 'none');
    });
    $('#statmentsButton').on('click', function() {
    $(this).parent().parent().hide(500);
    $('.statments').css('visibility', 'visible');
    
    });
    $('#returnButton').on('click', function() {
        location.reload(1000);
    });
});
$(document).ready(function() {
    $('.h3statmentsContainer').on('click', function() {
        $(this).next('.activePara').slideToggle('slow');
        $(this).toggleClass('h3statmentsContainerActive');
    });
    $('.h3statmentsContainer').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.05)');
        $(this).css('border', '2px solid #E98E00');
    });
    $('.h3statmentsContainer').on('mouseleave', function() {
        $(this).css('transform', 'scale(1)');
        $(this).css('border', 'none');
    });
    $('#stickyHeader').on('click', function() {
        $('.statments').css('display', 'flex');
    });

    $('.cardButton').on('mouseenter', function() {
        $(this).css('transform', 'scale(1.05)');
        $(this).css('box-shadow', '0 0 5px #08090A');
    });
    $('.cardButton').on('mouseleave', function() {
        $(this).css('transform', 'scale(1)');
        $(this).css('box-shadow', 'none');
    });

});

