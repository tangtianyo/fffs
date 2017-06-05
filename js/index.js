$(function(){
    $.ajax({
        url:"http://139.199.192.48:9090/api/getindexmenu",
        success:function(data){
            console.log(data);
            var sds=template('tablan',data);
            $('#minu .minu-tab').html(sds);
            $('#minu > .minu-tab > .minu1:nth-last-child(-n+4)').addClass('hide');

            $('#minu > .minu-tab > .minu1:nth-child(8)').click(function(){
                $('#minu > .minu-tab > .minu1:nth-last-child(-n+4)').toggleClass('hide');
            }); 
           $.ajax({
               url:'http://139.199.192.48:9090/api/getmoneyctrl',
               success:function(data){
                //    console.log(data);
                   var sdssd=template('xiangqing',data);
                   $('#recomnt .recomnt-nei ul').html(sdssd);
               }
           })
        }
    });
});