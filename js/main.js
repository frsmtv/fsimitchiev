$(document).ready(function() {

    // ********** TEXT ANIM BUBBLE-Y **********
    var $quotes = $('#quotes .quote'),
        opts = { fadeTime: 1000, dwellTime: 5000 },
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

    // **** LOGO HIDE ON SCROLL ****
    var scroll_start = 0;
    var startchange = $('body');
    var offset = startchange.offset();
    $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('#logo').addClass('animated fadeOut');

        } else {
            $('#logo').removeClass('fadeOut').addClass('fadeIn');
        }
    });

    // **** PROJECTS -> ACCORDION ****
    $('.accordion').accordion({
        "transitionSpeed": 400
    });

});