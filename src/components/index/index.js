import Handlebars from "handlebars";
import tpl from './index.hbs'
import $ from "jquery";

function index(menu){
    // 处理数据
    menu.forEach(element => {
        // element.path = element.path.replace(/\#/,"");
    });
    var Compile = Handlebars.compile(tpl);
    var Compiled = Compile({menu:menu});
    $("#main").html(Compiled);


}

export default index;