$(function () {
    //    console.log();
    var str = window.location.search;
    var str1 = str.split('?').join('');
    var cateIds = parseInt(str1.split('=')[1]);

    $.ajax({
        url: 'http://139.199.192.48:9090/api/getproduct',
        data: {
            productid: cateIds,
        },
        success: function (data) {
            //    console.log(data);
            var sds = template('sd', data);
            $('#xiangqingye #box1').html(sds);
            var sds1 = template('nime', data);
            $('#xiangqingye #box2').html(sds1);


            $.ajax({
                url: 'http://139.199.192.48:9090/api/getproductcom',
                data: {
                    productid: cateIds,
                },
                success:function(data){
                    // console.log(data);
                    var shang=template('xiangxi',data);
                    $('#xiangqingye #xiangxide ul').html(shang);
                }
            })
        }
    })

});