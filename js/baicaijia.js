$(function(){
   
var $index;
    $.ajax({
        url:'http://139.199.192.48:9090/api/getbaicaijiatitle',
        success:function(data){
            console.log(data);
            var tites=template('title',data);
            $('#baicai .baicai-tab .baicai-box').html(tites);

                // 导航的滚动条
        var Myswiper = new Swiper('.swiper-container', {
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 30,
            grabCursor: true
        });

         $.ajax({
                url:'http://139.199.192.48:9090/api/getbaicaijiaproduct',
                data:{
                    titleid:0,
                },
                success:function(data){
                   
                    var templas=template('tems',data);
                    $("#baicai .baicai-content ul").html(templas);
                }
            });
        $('#baicai .baicai-slide').click(function(){
            var $index= $(this).index();
            $.ajax({
                url:'http://139.199.192.48:9090/api/getbaicaijiaproduct',
                data:{
                    titleid:$index,
                },
                success:function(data){
                   
                    var templas=template('tems',data);
                    $("#baicai .baicai-content ul").html(templas);
                }
            });
        });

        }
    });
});