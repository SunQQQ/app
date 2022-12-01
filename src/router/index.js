import list from "../components/list/index";
import chart from "../components/chart/index"
import index from "../components/index/index"
import promiseAll from "../components/promiseAll/index"
import $ from "jquery";

var routes = [
    {
        path: '/',
        name:index
    },
    {
        path:'#chart',
        name: chart,
    },
    {
        path:'#list',
        name:list,
    },
    {
        path:'#promiseAll',
        name:promiseAll
    }
];

function router(){
    if(!location.hash){
        index();
    }
    window.onhashchange = function (){
        var UrlHash = location.hash;
        if(UrlHash){
            $.each(routes,function (i,item){
                if(item.path == UrlHash){
                    item.name();
                }
            });
        }
    }


}

export default router;