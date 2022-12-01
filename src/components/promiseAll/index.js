/**
 * 学习promise的then方法
 */
import Handlebars from "handlebars";
import axios from "axios";
import $ from "jquery";
import tpl from './index.hbs'

function myPromise() {
    var compile = Handlebars.compile(tpl);
    $("#main").html(compile);

    // 第一个请求
    let p1 = new Promise((resolve) => {
        axios({
            url: 'http://39.104.22.73:8081/ScoreRead/foreend',  // 列表接口
            method: 'post',
        }).then((resp) => {
            resolve(resp.data.data.num);
        }).catch();
    });

    // 第二个请求
    let p2 = new Promise((resolve) => {
        axios({
            url: 'http://39.104.22.73:8888/TagRead/foreend', // 标签列表接口
            method: 'post',
        }).then((resp) => {    
            resolve(resp.data.data.length);
        }).catch();
    });

    // 静态方法all的then方法就等同于，多个promise实例方法的多个then汇集
    Promise.all([p1,p2]).then((value)=>{
        console.log(value);
        $("#promise3").html(`${value[0]} + ${value[1]}`);
    });
}

export default myPromise;