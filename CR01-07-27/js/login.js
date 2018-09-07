/**
 * Created by nph on 2017/9/25.
 */
var height = $(window).height();
$('.login').height(height);
$(window).resize(function () {
    var height = $(window).height();
    $('.login').height(height);
})

