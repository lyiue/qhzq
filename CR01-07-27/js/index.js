/**
 * Created by nph on 2017/9/25.
 */
/*
*width=侧边栏宽度  右侧导航内容cr-content宽度为window宽度减去width宽度
*/
var width = $('.layui-side').width();
$('.cr-content').css('width',$(window).width()-width);
$('.cr-content').css('margin-left',width);

/*
* 窗口改变事件
* */
$(window).resize(function () {
    var width = $('.layui-side').width();
    $('.cr-content').css('width',$(window).width()-width);
    $('.cr-content').css('margin-left',width);
    /*地图*/
    var wHeight = $(window).height();
    var headerHeight = $('.cr-content').height();
    var mapHeight = $('.map-content').css('height',wHeight-headerHeight);
    var mapWidth = $('.map-content').css('width',$(window).width()-width);
    $('.map-content').css('margin-left',width);
    $('#mapContainer').css('width',mapWidth.width());
    $('#mapContainer').css('height',mapHeight.height());

    /*个人信息设置*/
    var editHeight = $('.cr-content').height();
    var edHeight = $('.editinfo-content').css('height',wHeight-editHeight);
    var edWidth = $('.editinfo-content').css('width',$(window).width()-width);
    $('.editinfo-content').css('margin-left',width);
    $('.edit-info').css('width',edWidth.width());
    $('.edit-info').css('height',edHeight.height());

    /*
     * baseinfo-content 静态数据宽高设置
     * */
    var baseHeight = $('.cr-content').height();
    var beHeight = $('.baseinfo-content').css('height',wHeight-baseHeight);
    var beWidth = $('.baseinfo-content').css('width',$(window).width()-width);
    $('.baseinfo-content').css('margin-left',width);
    $('.baseinfo').css('width',beWidth.width());
    $('.baseinfo').css('height',beHeight.height());


    /*
     * 路网档案 roadinfo-content
     * */
    var RoInfoeditHeight = $('.cr-content').height();
    var roadHeight = $('.roadinfo-content').css('height',wHeight-RoInfoeditHeight);
    var roadWidth = $('.roadinfo-content').css('width',$(window).width()-width);
    $('.roadinfo-content').css('margin-left',width);
    $('.roadinfo').css('width',roadWidth.width()-60);
    $('.roadinfo').css('height',roadHeight.height());


    /*
     * 路网档案基础资料切换卡 RoadInfoedit-tab
     * */
    var RoadInfoeditHeight = $('.cr-content').height();
    var roHeight = $('.RoadInfoedit-content').css('height',wHeight-RoadInfoeditHeight);
    var roWidth = $('.RoadInfoedit-content').css('width',$(window).width()-width);
    $('.RoadInfoedit-content').css('margin-left',width);
    $('.RoadInfoedit-content').css('width',roWidth.width());
    $('.RoadInfoedit-content').css('height',roHeight.height());

    /*
     * situation-content
     * */
    var sitHeight = $('.cr-content').height();
    var siHeight = $('.situation-content').css('height',wHeight-sitHeight);
    var siWidth = $('.situation-content').css('width',$(window).width()-width);
    $('.situation-content').css('margin-left',width);
    $('#situationContainer').css('width',siWidth.width());
    $('#situationContainer').css('height',siHeight.height());

    /*
     * assess-content
     * */
    var asHeight = $('.cr-content').height();
    var assHeight = $('.assess-content').css('height',wHeight-asHeight);
    var assWidth = $('.assess-content').css('width',$(window).width()-width);
    $('.assess-content').css('margin-left',width);
    $('#assessContainer').css('width',assWidth.width());
    $('#assessContainer').css('height',assHeight.height());
    $('.assess-chart1').css('width',assWidth.width()*0.8)


});


/*
* headerHeight 为导航高度
* */
var wHeight = $(window).height();
var headerHeight = $('.cr-content').height();
var mapHeight = $('.map-content').css('height',wHeight-headerHeight);
var mapWidth = $('.map-content').css('width',$(window).width()-width);
$('.map-content').css('margin-left',width);
$('#mapContainer').css('width',mapWidth.width());
$('#mapContainer').css('height',mapHeight.height());

/*
 * assess-content
 * */
var asHeight = $('.cr-content').height();
var assHeight = $('.assess-content').css('height',wHeight-asHeight);
var assWidth = $('.assess-content').css('width',$(window).width()-width);
$('.assess-content').css('margin-left',width);
$('#assessContainer').css('width',assWidth.width());
$('#assessContainer').css('height',assHeight.height());
$('.assess-chart1').css('width',assWidth.width()*0.8);


/*
* situation-content
* */
var sitHeight = $('.cr-content').height();
var siHeight = $('.situation-content').css('height',wHeight-sitHeight);
var siWidth = $('.situation-content').css('width',$(window).width()-width);
$('.situation-content').css('margin-left',width);
$('#situationContainer').css('width',siWidth.width());
$('#situationContainer').css('height',siHeight.height());


/*
* baseinfo-content 静态数据宽高设置
* */
var baseHeight = $('.cr-content').height();
var beHeight = $('.baseinfo-content').css('height',wHeight-baseHeight);
var beWidth = $('.baseinfo-content').css('width',$(window).width()-width);
$('.baseinfo-content').css('margin-left',width);
$('.baseinfo').css('width',beWidth.width());
$('.baseinfo').css('height',beHeight.height());
$('.position-nav').css('height',beHeight.height());

/*
* editinfo-content 个人信息修改宽高设置
* */
var editHeight = $('.cr-content').height();
var edHeight = $('.editinfo-content').css('height',wHeight-editHeight-30);
var edWidth = $('.editinfo-content').css('width',$(window).width()-width);
$('.editinfo-content').css('margin-left',width);
$('.edit-info').css('width',edWidth.width());
$('.edit-info').css('height',edHeight.height());

/*
* 退出登录位置
* */
// var userTypeButW = $('.userTypeBut').offset().left;
// $('.userExit').css('margin-left',userTypeButW+5);

/*
* 路网档案 roadinfo-content
* */
var RoInfoeditHeight = $('.cr-content').height();
var roadHeight = $('.roadinfo-content').css('height',wHeight-RoInfoeditHeight);
var roadWidth = $('.roadinfo-content').css('width',$(window).width()-width);
$('.roadinfo-content').css('margin-left',width);
$('.roadinfo').css('width',roadWidth.width()-60);
$('.roadinfo').css('height',roadHeight.height());


/*
* 路网档案基础资料切换卡 RoadInfoedit-tab
* */
var RoadInfoeditHeight = $('.cr-content').height();
var roHeight = $('.RoadInfoedit-content').css('height',wHeight-RoadInfoeditHeight);
var roWidth = $('.RoadInfoedit-content').css('width',$(window).width()-width);
$('.RoadInfoedit-content').css('margin-left',width);
$('.RoadInfoedit-content').css('width',roWidth.width());
$('.RoadInfoedit-content').css('height',roHeight.height());

