// 画图
import Handlebars from "handlebars";
import tpl from './index.hbs';
import $ from "jquery";

function Middle(){
    var Compile = Handlebars.compile(tpl);
    var Compiled = Compile();
    $("#main").html(Compiled);
}

export default Middle;