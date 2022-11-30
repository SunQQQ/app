// 画图
import Handlebars from "handlebars";
// import axios from "axios";
import $ from "jquery";
import tpl from './index.hbs'

function Promise(){
    var compile = Handlebars.compile(tpl);
    $("#main").html(compile);

    // axios({
    //     url: 'https://restapi.amap.com/v3/ip',
    //     method: 'post',
    //     params: {
    //       key: 'ba5f9b69f0541123a4dbe142da230b4d'
    //     },
    //   }).then(function (resp) {
    //     // alert(resp.data.city);    
    //     $("#promise1").html(resp.data.city);
    // }).catch();

    // axios({
    //     url: 'http://39.104.22.73:8081/ScoreRead/foreend',
    //     method: 'post',
    //     params: {
    //     },
    //   }).then(function (resp) {
    //     console.log(resp.data.data.num);    
    //     // resolve(resp.data.data.num);
    //     // $("#promise2").html(resp.data.data.num);
    // }).catch();

    // $.ajax({
    //     url: 'http://39.104.22.73:8081/ScoreRead/foreend',
    //     type: 'post',
    //     success:function (resp) {
    //         console.log(resp);
    //         // console.log(resp.data.data.num);
    //     }
    // });

    let p1 = new Promise(function(resolve,reject){
        $.ajax({
            url: 'http://39.104.22.73:8081/ScoreRead/foreend',
            type: 'post',
            success: function(resp) {
                resolve(resp);
            }
        });
        // axios({
        //     url: 'http://39.104.22.73:8081/ScoreRead/foreend',
        //     method: 'post',
        //     params: {
        //     },
        //   }).then(function (resp) {
        //     // console.log(resp.data.data.num);    
        //     resolve(resp.data.data.num);
        //     // $("#promise2").html(resp.data.data.num);
        // }).catch();
    });

    p1.then(function(r){
        console.log('货拉拉' + r);
    });
}

export default Promise;