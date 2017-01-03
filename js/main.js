$(document).ready(function() {

    // ********** TEXT ANIM **********
    var fin=!1;

    function foo(){
        $('mark').eq(0).css({background:'magenta'});
    }

    $(function(){
        $('#t').t({
            speed:15,
            speed_vary:true,
            mistype:00,

            typing:function(elem,chars_total,chars_left,_char){
                if(_char=='*')foo();
                // Auto scroll to top
                $(window).scrollTop($(document).height());

            },

            fin:function(){

                if(fin==!1){
                    fin=!!1; //avoids triggering after 'add' cmd
//                    window.setTimeout(function(){$('#t').t('add','<br>Clique !');},2e4);
                    window.setInterval(function(){$('#t').find('.t-caret').toggle();},5e2);

                    // Show menu after intro
                    // $('#fullpage').css({"-webkit-transform":"translate(0px,-50px)"})
                    // $('span').css('font-size', '1rem');
                    // $('mark').css('font-size', '1.4rem');
                    $('#contact').show();
                    $('footer').fadeIn();
                    // $('#logo').css('width', '120px');
                    // $(window).scrollTop($(document).height());
                }
            }
        });
    });

    // *********** PROJETS PAGE ANIMATIONS ***********

    // **** MUSIQUE SECTION ****
    $('#musicbtn').click(function() {
        $('#soundDesign').hide();
        $('#web').hide();
        $('#musicbtn').css('opacity', '1');
       $('#sdbtn').css('opacity', '0.5');
       $('#webbtn').css('opacity', '0.5');
       $('#musique').fadeIn();
       $('footer').show();
    });

    // **** SOUND DESIGN SECTION ****
    $('#sdbtn').click(function() {
        $('#musique').hide();
        $('#web').hide();
        $('#soundDesign').fadeIn();
        $('#sdbtn').css('opacity', '1');
        $('#musicbtn').css('opacity', '0.5');
        $('#webbtn').css('opacity', '0.5');
        $('footer').show();
    });

    // **** WEB SECTION ****
    $('#webbtn').click(function() {
        $('#musique').hide();
        $('#soundDesign').hide();
        $('#web').fadeIn();
        $('#sdbtn').css('opacity', '0.5');
        $('#musicbtn').css('opacity', '0.5');
        $('#webbtn').css('opacity', '1');
        $('footer').show();
    });
});