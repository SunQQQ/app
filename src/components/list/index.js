import tpl from './index.hbs';
import * as Handlebars from "handlebars";
import $ from "jquery";
import "./style.css";

function index(){
    var Compile = Handlebars.compile(tpl);
    var Compiled = Compile({ title: "笨小孩", body: "这是我的第er篇文章！",PhoneSystem:['塞班','爱疯','android','鸿蒙']});

    $("#main").empty();

    $("#main").html(Compiled);
}

export default index;


