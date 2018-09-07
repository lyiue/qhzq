/**
 * Created by nph on 2017/7/29.
 */
ip = '192.168.1.84:3000';
// ip = '120.26.227.120:3000';

$.ajaxSetup({
    data:{
        "UserID": localStorage.getItem("_id")
    }
});