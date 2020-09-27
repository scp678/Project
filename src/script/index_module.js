define([], function() {
    return {
        init:function() {
            // 限时特惠
            const $list_1 = $('.f-list ul');
            $.ajax({
                    url: 'http://localhost/Project/php/alldata.php',
                    dataType: 'json' 
                })
                .done((data) => {
                    let $renderdata = data;
                    let $strhtml = ''; 
                    $.each($renderdata, function(index, value) {
                        if(index <= 5) {
                            $strhtml += `
                                <li> 
                                    <a href="detail.html?sid=${value.sid}">
                                        <img class="lazy" data-original="${value.url}" width="220" height="220" />   
                                    </a>
                                </li>
                            `;
                        }
                    });
                    $list_1.html($strhtml);
                    //懒加载效果
                    $("img.lazy").lazyload({
                        effect: "fadeIn" //图片显示方式
                    });
                });

            // 热卖
            const $list_2 = $('.hot ul');
            $.ajax({
                    url: 'http://localhost/Project/php/alldata.php',
                    dataType: 'json' 
                })
                .done((data) => {
                    let $renderdata = data;
                    let $strhtml = ''; 
                    $.each($renderdata, function(index, value) {
                        if(index <= 3) {
                            $strhtml += `
                                <li> 
                                    <div class="h-top">
                                        <span class="h-top-title">保价双11</span>
                                    </div>
                                    <div class="h-middle">
                                        <a href="detail.html?sid=${value.sid}">
                                            <img class="lazy" data-original="${value.url}" width="220" height="220" />   

                                            
                                        </a>
                                    </div>
                                    <div class="h-bottom">
                                        <a href="detail.html?sid=${value.sid}">
                                            <h2>${value.title}</h2>
                                            <p>搭配满3件减400，满4件减700</p>
                                            <div class="h-price">
                                                ￥<span class="money">${value.price}</span>
                                                <span class="send">
                                                    <i></i>赠送${value.price}积分
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            `;
                        }
                    });
                    $list_2.html($strhtml);
                    //懒加载效果
                    $("img.lazy").lazyload({
                        effect: "fadeIn" //图片显示方式
                    });
                });
        }
    }
    
});