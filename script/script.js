    jQuery("document").ready(function ($) {
        var h_hght = $('#menu').outerHeight();
        console.log(h_hght);
        var h_nav = $('.head').outerHeight();
        console.log(w_nav);
        var nav = $('#menu');
        var TextLogo = $('#TextLogo');
        var w_nav = $('.head').outerWidth();


        $(window).scroll(function () {
            if ($(this).scrollTop() > h_nav - h_hght) {
                nav.addClass("f-nav");
                TextLogo.css('display', 'block');
            } else {
                nav.removeClass("f-nav");
                TextLogo.css('display', 'none');
            }
        });
        $('a[href^="#"]').click(function () {
            let target = $(this).attr('href');
            console.log(target);
            $('html,body').animate({
                scrollTop: $(target).offset().top
            }, 1000);
        });
    });
    var menu = document.getElementById('menu');
    menu.style.display = 'none';
    var btnYes = document.getElementById('btnYes').onclick = function () {
        var block = document.getElementById('block');
        var contHiden = document.getElementById('contHiden');
        var logo = document.getElementById('logo');
        var blockLink = document.getElementById('blockLink');
        block.style.display = 'none';
        block.style.transition = 'none';
        blockLink.style.display = 'block';
        logo.style.display = 'block';
        contHiden.style.display = 'block';
        menu.style.display = 'block';
    }
    var linkMobilMenu = document.getElementById('linkMobilMenu');
    linkMobilMenu.onclick = function () {
        linkMobilMenu.style.display = 'none';
    }
    var he = document.getElementById('head1').clientWidth;
    var TextLogo = document.getElementById('TextLogo');
    //console.log(he);

    /*window.onscroll = function() {
        if(he > 992){
           console.log(he);
           TextLogo.style.display='block';
        }else{
           TextLogo.style.display='none';
        }
    }*/
    //var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    //document.getElementById('showScroll').innerHTML = scrolled + 'px';
    /* $(window).scroll(function () {
            if ($(this).scrollTop() > h_nav - h_hght && w_nav > 992) {
                   TextLogo.css('display','block');
            } else {
                  TextLogo.css('display','none');
            
        });}*/