import $ from "jQuery"

function $extend(){
    console.log("jq 深度复制和深度合并");

    let person = {
        name: 'sq',
        sex: 'male',
        value: {
            weight: 80
        }
    };
    let animal = {
        wife: undefined,
        food: 'meat',
        sex: 'no',
        value:{
            weight:600,
            price:10
        },
        skill: function(){
            console.log('eat other animal');
        }
    }

    console.log(JSON.parse(JSON.stringify(animal))); // JSON的深拷贝会过滤掉function
    console.log($.extend(animal,person));  // 此时animal的value属性值中只有1个属性
    console.log($.extend(true,animal,person)); // 此时animal的value属性值中有2个属性，true表示深度合并 

    // $.extend注意点：
    // 1、第一个参数为true时，深度拷贝。比如第三个对象的属性值也是对象，这时第二个对象的同名对象属性也会合并。否则上述情况会被覆盖
    // 2、第一个对象会被修改，且与$.extend()返回数据一致；如果不想被篡改，可以将第一个对象赋值{}
    // 3、第一个参数true,用于深度合并
}

export default $extend;