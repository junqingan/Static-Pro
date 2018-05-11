/**
 * @author [junqingan]
 * @email [an_xmin@126.com]
 * @create date 2018-05-11 05:36:43
 * @modify date 2018-05-11 05:36:43
 * @desc [description]
*/



window.$ = require('jquery');
require('../utils/SuperSlide');
var homeController = require("../controllers/homeController.js").getInstance();

var indexLess = require('../../less/index.min.less');
homeController.init();