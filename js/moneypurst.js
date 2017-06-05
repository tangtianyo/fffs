$(function(){
   
   var str=window.location.search;
    // console.log(window.location);
   var str1= str.split('?').join('');
   
   var cats= str1.split('&')[0]; 

   var cateId=parseInt(cats.split('=')[1]);
        $.ajax({
                url:'http://139.199.192.48:9090/api/getmoneyctrlproduct',
                data:{
                    productid:cateId,
                },
                success:function(data){
                   
                   var tes=template('songhuos',data);
                   $('#content .cu-content').html(tes);
                   var sds=template('pinlun',data);
                   $('#content .cu-content-pl').html(sds);
                }
                
            })
});