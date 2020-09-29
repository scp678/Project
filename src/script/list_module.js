define(['pagination','jlazyload'], function() {
    return {
        init:function() {
            let array_default = [];
            let array = [];
            let prev = null;
            let next = null;

            const $list = $('.list');
            $.ajax({
                url: 'http://localhost/Project/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $.each(data,function(index,value) {
                    $strhtml  += `
                        <li>
                            <div class="top">
                                <span class="tit"></span>
                            </div>
                            <div class="pic">
                                <a href="detail.html?sid=${value.sid}">
                                    <img class="lazy" data-original="${value.url}" width="200" height="200" />
                                </a>
                            </div>
                            <div class="bottom">
                                <a href="detail.html?sid=${value.sid}">
                                    <h2>${value.title}</h2>
                                    <p class="add">①即刻下单，限时享满2000减200元，满1000减100元，不定时调回！咨询客服下单享老板会员专属福利价！</p>
                                    <div class="price">￥
                                        <span class="money">${value.price}</span>
                                    </div>
                                    <p class="sailnum">${value.sailnumber}人付款</p>
                               </a>
                            </div>
                        </li>
                    `;
                })
                $list.html($strhtml);

                 //添加懒加载
                $(function() {
                    $("img.lazy").lazyload({ effect: "fadeIn" });
                });

                array_default = [];
                array = [];
                prev = null;
                next = null;
                $('.list li').each(function(index,element) {
                    array[index] = $(this);
                    array[index] = $(this);
                });
            });
        }
    }
    
});