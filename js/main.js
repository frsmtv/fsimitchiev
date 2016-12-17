$(document).ready(function() {

    // ********** SECTIONS REVEAL **********
    $('#aMusic').click(function() {
        $('#music').fadeIn();
    });


    // ********** TEXT ANIM **********
    var fin=!1;

    function foo(){
        $('mark').eq(0).css({background:'magenta'});

    }

    $(function(){



        $('#t').t({

            speed:25,
            speed_vary:true,
            mistype:20,


            typing:function(elem,chars_total,chars_left,_char){
                if(_char=='*')foo();
            },

            fin:function(){

                if(fin==!1){
                    fin=!!1; //avoids triggering after 'add' cmd
//                    window.setTimeout(function(){$('#t').t('add','<br>Clique !');},2e4);
                    window.setInterval(function(){$('#t').find('.t-caret').toggle();},5e2);
                }

            }

        });



    });



});