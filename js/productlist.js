$(function(){
    
    var str=window.location.search;
    // console.log(window.location);
   var str1= str.split('?').join('');
   
   var cats= str1.split('&')[0]; 

   var cateId=parseInt(cats.split('=')[1]);

    $.ajax({
        url:'http://139.199.192.48:9090/api/getcategorybyid',
        data:{
            categoryid:cateId,

        },
        success:function(data){
           var zhonglei=template('yangshi',data);
           $('#pres-list nav').html(zhonglei);
            $.ajax({
                url:'http://139.199.192.48:9090/api/getproductlist',
                data:{
                    categoryid:cateId,
                    pageid:1,
                },
                success:function(data){
                    console.log(data);
                    var temosds=template('temps',data)
                    $('#pres-list .product-list ul').html(temosds);
                    var sd=Math.ceil(data.totalCount/5);
                    $('#pres-list select option').eq(0).html(sd);
                     $('#pres-list select option').eq(1).html(data.totalCount);
                    // 详情页面
                }
            })
        }
    });
});