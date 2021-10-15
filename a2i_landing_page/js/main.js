

$(document).ready(function(){

    window.addEventListener("wheel", function(e){
        e.preventDefault();
    },{passive : false});

    var mHtml = $("html");
    var page = 1;


    mHtml.animate({scrollTop : 0},100);

    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 4) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
        }
        var posTop =(page-1) * $(window).innerHeight();
        mHtml.animate({scrollTop : posTop});
    });

    $('#btn1').click(function() {
        $('.num1').css('display', 'block');
    });

    $('#btn2').click(function() {
        $('.num2').css('display', 'block');
    });

    $('#btn3').click(function() {
        $('.num3').css('display', 'block');
    });

    $('#btn4').click(function() {
        $('.num4').css('display', 'block');
    });

    $('#btn1_1').click(function() {
        $('.num1').css('display', 'block');
    });

    $('#btn2_1').click(function() {
        $('.num2').css('display', 'block');
    });

    $('#btn3_1').click(function() {
        $('.num3').css('display', 'block');
    });

    $('#btn4_1').click(function() {
        $('.num4').css('display', 'block');
    });

    $('.num1').click(function() {
        $(this).css('display', 'none');
    });

    $('.num2').click(function() {
        $(this).css('display', 'none');
    });

    $('.num3').click(function() {
        $(this).css('display', 'none');
    });

    $('.num4').click(function() {
        $(this).css('display', 'none');
    });

    $('.btn_m1').click(function() {
        $('.num_m1').css('display', 'block');
    });

    $('.btn_m2').click(function() {
        $('.num_m2').css('display', 'block');
    });

    $('.btn_m3').click(function() {
        $('.num_m3').css('display', 'block');
    });

    $('.btn_m4').click(function() {
        $('.num_m4').css('display', 'block');
    });

    $('.num_m1').click(function() {
        $(this).css('display', 'none');
    });

    $('.num_m2').click(function() {
        $(this).css('display', 'none');
    });

    $('.num_m3').click(function() {
        $(this).css('display', 'none');
    });

    $('.num_m4').click(function() {
        $(this).css('display', 'none');
    });
});