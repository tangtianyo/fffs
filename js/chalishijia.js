 $(function () {
     var $index;
     var $dataindex;
     var flag=true;
     $.ajax({
         url: 'http://139.199.192.48:9090/api/getcategorytitle',
         success: function (data) {
             
             var titles = template('title', data);
             $('#category .category-title').html(titles);

              $('#category .category-title li').click(function(){

                    $dataindex = $(this).attr('data-type');
                    $index=$(this).index();
                 $.ajax({
                     url: 'http://139.199.192.48:9090/api/getcategory',
                     data: {
                         titleid: $index,
                     },
                     success:function(data){
                         console.log(data);
                         var spd = template('mtvs', data);
                         
                         $('#category .category-title li .catsdsa-boot').eq($index).html(spd);
                        
                         if(flag==true){
                            $('#category .category-title li .catsdsa-boot').eq($index).css('display','block');
                            flag=false;
                         }else{
                             $('#category .category-title li .catsdsa-boot').eq($index).css('display','none');
                             flag=true;
                         }

                     }
                 })    
                           
                })

         
         }
     });

 })