import $ from "jquery";

require("!style-loader!css-loader!./style.css");
document.write(require("./runoob2.js"));

// 画图
import * as Echarts from 'echarts';
var data = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
var myChart = Echarts.init($('#main')[0]);
myChart.setOption(data);
console.log($('未崩'));

// 渲染模板
var Handlebars = require('handlebars');
const source = $("#entry-template").html();
const template = Handlebars.compile(source);
$('#Template').html(template({ title: "我的新文章", body: "这是我的第一篇文章！" }));

