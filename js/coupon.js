$(function(){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getcoupon',
        success:function(data){
            var sds=template('kfc',data);
            $('#coupon-title ul').html(sds);
        }
    });
});