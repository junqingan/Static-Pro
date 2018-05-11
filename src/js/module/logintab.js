/**
 * @author [junqingan]
 * @email [an_xmin@126.com]
 * @create date 2018-05-11 05:36:51
 * @modify date 2018-05-11 05:36:51
 * @desc [description]
*/


function start() {
	 // 登录tab切换
    var NavTabsli =$('.nav-tabs .nav-justified'),
        TabPane=$('.tab-pane');
        NavTabsli.on('click',function(e){
            $(this).addClass('cur').siblings().removeClass('cur');
            var idx = $(this).index();
            $(".tab-point").css("margin-left",idx*50+'%');
            $('.form-tab-pane').css("margin-left",idx*-415+'px');
        });
}
function init() {
    start();
}
module.exports = {
    init: init
};
