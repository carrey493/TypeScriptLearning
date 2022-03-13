//声明一个变量a，同时指定它的类型为number
var a;
//a的类型设置为number,在以后的使用过程中a的值只能是数字
a = 10;
// a='hello'; 不能将类型“string”分配给类型“number”。
var b;
b = 'hello';
//声明完变量直接进行赋值
var c = false;
//如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
var c2 = false;
//c2 = 'c2' 不能将类型“string”分配给类型“boolean”。
//js中的函数是不考虑参数的类型和个数的
function sum1(a, b) {
    return a + b;
}
sum1(123, '456'); //'123456'
function sum2(a, b) {
    return a + b;
}
// sum2(123,'456');//类型“string”的参数不能赋给类型“number”的参数。
// sum2(123,456,789);//应有 2 个参数，但获得 3 个。
