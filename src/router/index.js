import list from "../components/list/index";
import chart from "../components/chart/index";
import index from "../components/index/index";
import promiseAll from "../components/promiseAll/index";
import $extend from "../components/$extend/index";
import middle from "../components/middle/index";
import $ from "jquery";

let routes = [
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
    },
    {
        path: "#extend",
        name: $extend
    },
    {
        path:"#middle",
        name: middle
    }
];

let router = () => {
    if(!location.hash){
        index(routes);
    }
    window.onhashchange = function (){
        
        loadModule(routes);
    }
    window.onload = function(){
        loadModule(routes);
    }
}

let loadModule = (myRoute) => {
    let UrlHash = location.hash;
    if(UrlHash){
        $.each(myRoute,function (i,item){
            if(item.path == UrlHash){
                item.name();
            }
            debugger
        });
    }
}

export default router;