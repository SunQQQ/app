// 画图
import * as Echarts from "echarts";
import chartContent from './index.hbs'

function Char(){
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
    console.log(chartContent);
// var myChart = Echarts.init($('#main')[0]);
//     var myChart = Echarts.init(chartContent);
//     myChart.setOption(data);
}

export default Char;