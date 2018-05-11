/**
 * @author [junqingan]
 * @email [an_xmin@126.com]
 * @create date 2018-05-11 05:36:57
 * @modify date 2018-05-11 05:36:57
 * @desc [description]
*/



var Login =require('../module/logintab');

var Home = function () {
    this.options = {};
    this.redianM = null, this.redianC = null;
};

/**
 * 初始化
 * @param options Object 参数传递
 */
Home.prototype.init = function (options) {
    $.extend(this.options, options);
    this.initLogin();
}


/**
 * 工作经验
 */
Home.prototype.initLogin = function () {
    Login.init();
};



var instance;

module.exports = {
    'getInstance': function(options) {
        return instance || (instance = new Home(options));
    }
};