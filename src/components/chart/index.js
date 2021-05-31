// 画图
import Handlebars from "handlebars";
var myChart;
import $ from "jquery";
import * as Echarts from "echarts";
import tpl from './index.hbs'

function Char(){
    var Compile = Handlebars.compile(tpl);
    var Compiled = Compile({ title: "笨小孩"});
    $("#main").html(Compiled);

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
    myChart = Echarts.init($('#ChartDiv')[0]);

    myChart.setOption(data);
}

export default Char;