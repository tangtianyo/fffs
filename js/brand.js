$(function(){
          var str=window.location.search;
    // console.log(window.location);
   var str1= str.split('?').join('');
   
   var cats= str1.split('&')[0]; 

   var cateId=parseInt(cats.split('=')[1]);
   $.ajax({
        url:'http://139.199.192.48:9090/api/getbrand',
        data:{
            brandtitleid:cateId,
        },
        success:function(data){
            console.log(data);
            var sdsd=template('tvs',data);
            $('#category .row ul').html(sdsd);
            $('#category .row ul li:nth-child(1) .yan').addClass('tis1');
            $('#category .row ul li:nth-child(2) .yan').addClass('tis2');
            $('#category .row ul li:nth-child(3) .yan').addClass('tis3');
        }
   });
});