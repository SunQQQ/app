import Handlebars from "handlebars";
import tpl from './index.hbs'
import $ from "jquery";

function index(){
    var Compile = Handlebars.compile(tpl);
    var Compiled = Compile({});
    $("#main").html(Compiled);
}

export default index;