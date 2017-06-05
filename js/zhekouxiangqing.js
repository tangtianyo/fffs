$(function(){
    
    var sd=window.location.search;
    var proId=parseInt(sd.split('?').join(''));
    $.ajax({
        url:'http://139.199.192.48:9090/api/getdiscountproduct',
        data:{
            productid:proId,
        },
        success:function(data){
            
            var tes=template('zhiliao',data);
            $('#recoment-product .cu-content').html(tes);
        }
    });
});