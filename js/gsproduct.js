$(function () {
    var $index;
    var $findex;
    var fs;
    $.ajax({
        url: 'http://139.199.192.48:9090/api/getgsshop',
        success: function (data) {
            var sds = template('tas', data);

            $('#gs-product .popsort ul').html(sds);
            // 进来就调用一次
            $.ajax({
                url: 'http://139.199.192.48:9090/api/getgsproduct',
                data: {
                    shopid: 0,
                    areaid: 0,
                },
                success: function (data) {
                    var sdds = template('fan', data);
                    $('#gs-product .bd>ul').html(sdds);

                }

            })

            $.ajax({
                url: 'http://139.199.192.48:9090/api/getgsshoparea',
                success: function (data) {
                    var ds = template('sds', data);
                    $('#gs-product .popcat ul').html(ds);

                    $('#gs-product #tsdsd ul li').click(function () {
                        $index = $(this).index();
                        if ($index == 0) {
                            $('#gs-product .popsort').slideToggle('active');
                            $('#gs-product .popsort ul>li>a').click(function () {
                                    fs = parseInt($(this).attr('data-type'));
                                if (fs == 1) {
                                    $('#gs-product #tsdsd ul li>a>span').html('一号店');
                                } else if (fs == 2) {
                                    $('#gs-product #tsdsd ul li>a>span').html('天猫超市');
                                }
                                $.ajax({
                                    url: 'http://139.199.192.48:9090/api/getgsproduct',
                                    data: {
                                        shopid: $index,
                                        areaid: fs,
                                    },
                                    success: function (data) {
                                        var sdds = template('fan', data);
                                        $('#gs-product .bd>ul').html(sdds);

                                    }

                                })
                            })

                        } else if ($index == 1) {
                            $('#gs-product .popcat').slideToggle('active');

                        } else {
                            $('#gs-product .popprice').slideToggle('active');
                        }
                    })
                }
            })
        }
    });
});