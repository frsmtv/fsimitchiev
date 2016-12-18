$(document).ready(function() {

    // ********** TEXT ANIM **********
    var fin=!1;

    function foo(){
        $('mark').eq(0).css({background:'magenta'});
    }

    $(function(){
        $('#t').t({
            speed:20,
            speed_vary:true,
            mistype:100,

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
                    $('#nav').fadeIn();
                    $(window).scrollTop($(document).height());
                }
            }
        });
    });

    // ********** CONTACT REVEAL **********
    $('#contactLink').click(function() {
        $('#contact').fadeIn();
        $(window).scrollTop($(document).height());
    })

});