define(['jquery','jlazyload'], function() {
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
                            <li class="flash"> 
                                <div class="top">
                                    <span class="top-title">保价双11</span>
                                </div>
                                <a href="detail.html?sid=${value.sid}">
                                    <div class="middle">
                                        <img class="lazy" data-original="${value.url}" width="220" height="220" />
                                    </div>  
                                    <div class="bottom">
                                        <h2>${value.title}</h2>
                                        <p>工厂直购节（9月27日24点结束）：即刻下单，限时享出厂价！咨询客服享老板会员专属福利价！</p>
                                        <div class="bottom-price">
                                            ￥<span class="money">${value.price}</span>
                                        </div>
                                        <div class="buy">
                                            立即购买
                                        </div>
                                    </div> 
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

            // 楼梯
            const $list_3 = $('.floor .floor-c .floor-left');
            $.ajax({
                url: 'http://localhost/Project/php/alldata.php',
                dataType: 'json' 
            })
            .done((data) => {
                let $renderdata = data;
                let $strhtml = ''; 
                $.each($renderdata, function(index, value) {
                if(index === 0) {
                        $strhtml += `
                            <a href="detail.html?sid=${value.sid}">
                                <div class="top">
                                    <span class="top-title">保价双11</span>
                                </div>
                                <img class="lazy" data-original="${value.url}" width="301" height="520" />  
                                <div class="bottom">
                                    <h2 class="bottom-left">
                                        ￥${value.price}
                                    </h2>
                                    <div class="bottom-right">
                                        <h3>27A5+57B0</h3>
                                        <p>黑晶玻璃套装</p>
                                    </div>
                                </div>
                            </a>
                        `;
                    }
                });
                $list_3.html($strhtml);
                //懒加载效果
                $("img.lazy").lazyload({
                    effect: "fadeIn" //图片显示方式
                });
            });

            const $list_4 = $('.floor .floor-c .floor-right');
            $.ajax({
                url: 'http://localhost/Project/php/alldata.php',
                dataType: 'json' 
            })
            .done((data) => {
                let $renderdata = data;
                let $strhtml = ''; 
                $.each($renderdata, function(index, value) {
                    if(index > 0 && index < 5) {
                        $strhtml +=`
                            <li>
                                <a href="detail.html?sid=${value.sid}">
                                    <div class="top">
                                        <span class="top-title">保价双11</span>
                                    </div>
                                    <div class="middle">
                                        <img class="lazy" data-original="${value.url}" width="180" height="180" /> 
                                    </div>
                                    <div class="bottom">
                                        <h2>${value.title}</h2>
                                        <p>27X6+37B0</p>
                                        <p>搭配满3件减400，满4件减700</p>
                                        <div class="f-price">
                                            ￥${value.price}
                                        </div>
                                        <div class="f-send">
                                            <i></i>赠送${value.price}积分
                                        </div>
                                    </div>
                                </a>
                            </li>
                        `;
                    }
                });
                $list_4.html($strhtml);
                //懒加载效果
                $("img.lazy").lazyload({
                    effect: "fadeIn" //图片显示方式
                });
            });
            
            $(function(){
                const $slide = $('.slide');
                const $picli = $('.slide ul li');
                const $btnli = $('.slide .circle .cl');
                const $leftarrow = $('.slide .left');
                const $rightarrow = $('.slide .right');
                let $index = 0; 
                let $timer = null;
    
                $btnli.each(function(index,element) {
                    $btnli.eq(index).on('mouseover',function() {
                        $index = index;
                        tabswitch();
                    })
                })
    
                $leftarrow.on('mouseover',function() {
                    $leftarrow.css({'background-color':'rgba(0,0,0,.5)'})
                })
                $rightarrow.on('mouseover',function() {
                    $rightarrow.css({'background-color':'rgba(0,0,0,.5)'})
                })
                $slide.on('mouseover',function() {
                    clearInterval($timer);
                })
    
                $leftarrow.on('mouseout',function() {
                    $leftarrow.css({'background-color':'transparent'})
                })
                $rightarrow.on('mouseout',function() {
                    $rightarrow.css({'background-color':'transparent'})
                })
                $slide.on('mouseout',function() {
                    $timer = setInterval(() => {
                        $rightarrow.click();
                    },3000)
                })
    
                $rightarrow.on('click',function() {
                    rightclick();
                })
    
                $leftarrow.on('click',function() {
                    leftclick();
                }) 
    
                // 自动轮播
                $timer = setInterval(() => {
                    $rightarrow.click();
                },3000);
    
    
                function tabswitch() {
                    $btnli.each(function(index,element) {
                        $btnli.eq(index).removeClass('active');
                        $picli.eq(index).animate({
                            opacity: 0
                        })
                    })
                    $btnli.eq($index).addClass('active');
                    ($picli.eq($index).animate({
                        opacity:1,
                    },"fast","linear")).siblings().animate({
                        opacity:0,
                    },"fast","linear").finish();
                }
    
                function rightclick() {
                    $index++;
                    if($index > $btnli.length - 1) {
                        $index = 0;
                    }
                    tabswitch();
                }
    
                function leftclick() {
                    $index--;
                    if($index < 0) {
                        $index = $btnli.length - 1;
                    }
                    tabswitch();
                }
            })

        }
        
    }
    
});