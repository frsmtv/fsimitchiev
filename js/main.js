$(document).ready(function() {

    // ********** TEXT ANIM T.JS **********
//     var fin=!1;
//
//     function foo(){
//         $('mark').eq(0).css({background:'magenta'});
//     }
//
//     $(function(){
//         $('#t').t({
//             speed:15,
//             speed_vary:true,
//             mistype:00,
//
//             typing:function(elem,chars_total,chars_left,_char){
//                 if(_char=='*')foo();
//                 // Auto scroll to top
//                 $(window).scrollTop($(document).height());
//
//             },
//
//             fin:function(){
//
//                 if(fin==!1){
//                     fin=!!1; //avoids triggering after 'add' cmd
// //                    window.setTimeout(function(){$('#t').t('add','<br>Clique !');},2e4);
//                     window.setInterval(function(){$('#t').find('.t-caret').toggle();},5e2);
//
//                     // Show menu after intro
//                     // $('#fullpage').css({"-webkit-transform":"translate(0px,-50px)"})
//                     // $('span').css('font-size', '1rem');
//                     // $('mark').css('font-size', '1.4rem');
//                     $('#contact').show();
//                     $('footer').fadeIn();
//                     // $('#logo').css('width', '120px');
//                     // $(window).scrollTop($(document).height());
//                 }
//             }
//         });
//     });

    // // ********** TEXT ANIM BUBBLE-Y **********
    var $quotes = $('#quotes .quote'),
        opts = { fadeTime: 1000, dwellTime: 6000 },
        shuffle,
        fadeInQuote,
        fadeOutQuote,
        switchTo,
        active,
        next = 0,
        last = 1;


        //+ Jonas Raoni Soares
        //@ http://jsfromhell.com/array/shuffle [v1.0]
            shuffle = function(o){ //v1.
                for(var j, x, i = o.length; i; j = parseInt(Math.random() *
                    Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            };

        // fancy on the way in
            fadeInQuote = function (q) {
                var letters = shuffle( $('[class*="char"]', $quotes[q]) );

                $($quotes[q]).show();
                $.each( letters, function (i, l) {
                    setTimeout(
                        function () { $(l).animate({opacity: 1}, 100 ); },
                        ( (opts.fadeTime/2) / letters.length * i ) + (opts.fadeTime/2)
                    );
                });
            };

        // and fancy on the way out
            fadeOutQuote = function (q) {
                var letters = shuffle( $('[class*="char"]', $quotes[q]) );

                $.each(letters, function (i, l) {
                    setTimeout(
                        function () {
                            $(l).animate({opacity: 0}, 100 );
                        },
                        ( (opts.fadeTime/2) / letters.length ) * i
                    );
                });

                setTimeout( function () {
                        $($quotes[q]).hide(); },
                    opts.fadeTime/2
                );
            };

            switchTo = function ( to ) {
                var old = active;

                fadeInQuote(to);
                fadeOutQuote(old);

                active = to;
            };


            $quotes.each( function (i, quote) {
                $(quote).hide();
                $(quote)
                    .children('p').lettering('lines')
                    .children('[class*=line]').lettering();

            });

            switchTo(next);
            setInterval( function () {
                next = ( active + 1 ) % $quotes.length;
                switchTo(next);
            }, opts.dwellTime );

    // **** LOGO REDUCE ON SCROLL ****
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#logo').addClass('animated zoomOut');
        } else {
            $('#logo').removeClass('zoomOut').addClass('zoomIn');
        }
    });

    // *********** PROJETS PAGE ANIMATIONS ***********

    // **** MUSIQUE SECTION ****
    $('#musicbtn').click(function() {
        $('#musicbtn').css('opacity', '1');
       $('#webbtn').css('opacity', '0.5');
        $('#web').hide();
       $('#musique').fadeIn();
       $('footer').show();
    });

    // **** WEB SECTION ****
    $('#webbtn').click(function() {
        $('#musicbtn').css('opacity', '0.5');
        $('#webbtn').css('opacity', '1');
        $('#musique').hide();
        $('#web').fadeIn();
        $('footer').show();
    });

});