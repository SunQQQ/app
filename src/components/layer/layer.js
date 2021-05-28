import tpl from './index.hbs';
import * as Handlebars from "handlebars";

function layer(){
    var Compile = Handlebars.compile(tpl);
    var Compiled = Compile({ title: "真热闹", body: "这是我的第er篇文章！" });

    return Compiled;
}

export default layer;


