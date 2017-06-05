$(function(){
    $.ajax({
        url:'http://139.199.192.48:9090/api/getinlanddiscount',
        success:function(data){
            var sds=template('shangpin',data);
            $("#content .content-list ul").html(sds);
        }
    })
});