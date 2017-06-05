$(function(){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getbrandtitle',
        success:function(data){
            var sds=template('zhonglei',data);
            $('#category .row .category-title').html(sds);
        }
    });
});