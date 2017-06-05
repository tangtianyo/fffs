$(function(){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getsitenav',
        success:function(data){
            var sds =template('tesd',data);
            $('#site-nav .link').html(sds);
        }
    });
});