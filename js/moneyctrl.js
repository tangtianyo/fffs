$(function () {
    var zongye;
    var sdsd;
    var sd = 0;
     var ops;
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getmoneyctrl',
        data: {
            pageid: 1,
        },
        success: function (data) {
            console.log(data);
            var sds = template('xiangqing', data);
            $('#recomnt .recomnt-nei ul').html(sds);

            zongye = parseInt(data.totalCount / data.pagesize);
            for (var i = 1; i <= zongye; i++) {
                sdsd = $('<option value='+i+'>' + i + '/' + zongye + '</option>');
                $('#recomnt #yeshu').append(sdsd);
                
            }
            var ops=$('#recomnt #yeshu').children();

            console.log(ops.length);
            // 点击option的实现方式
            $('#recomnt #yeshu ').change(function () {
                sd = parseInt($(this).val().split('/')[0]);
                console.log(sd);
                $.ajax({
                    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
                    data: {
                        pageid: sd,
                    },
                    success: function (data) {
                        // console.log(data);
                        var sds = template('xiangqing', data);
                        $('#recomnt .recomnt-nei ul').html(sds);


                        //点击上一页的实现代码
                        if (sd >=1) {
                            $('#recomnt #shang').click(function () {
                                console.log(1);
                                for(var i=0;i<ops.length;i++){
                                    if(sd==ops[i].value){
                                        ops[i].selected=true;
                                }
                                }
                                sd--;
                                $('')                               
                                $.ajax({
                                    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
                                    data: {
                                        pageid: sd,
                                    },
                                    success: function (data) {
                                        // console.log(data);
                                        var sds = template('xiangqing', data);
                                        $('#recomnt .recomnt-nei ul').html(sds);

                                    }
                                });
                                if (sd >=ops.length) {

                                    $('#recomnt #shang').unbind("click");
                                    return;
                                }


                            });


                        }
                        // 点击下一页的实现代码

                        if (sd < ops.length) {
                            $('#recomnt #xia').click(function () {
                                sd++;
                            
                                 for(var i=0;i<ops.length;i++){
                                    if(sd==ops[i].value){
                                        ops[i].selected=true;
                                }
                                

                                }
                                $.ajax({
                                    url: 'http://139.199.192.48:9090/api/getmoneyctrl',
                                    data: {
                                        pageid: sd,
                                    },
                                    success: function (data) {
                                        // console.log(data);
                                        var sds = template('xiangqing', data);
                                        $('#recomnt .recomnt-nei ul').html(sds);

                                    }
                                });


                            });
                        }else{
                             
                            $('#recomnt #xia').unbind("click");
                            return;
                        }
                        
                    }
                });
            });





        }
    });
  
});