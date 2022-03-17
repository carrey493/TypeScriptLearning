//object 表示一个对象
let a: object
a = {}
a = function () { }

// {} 用来指定对象中可以包含那些属性
//语法 ： {属性名:属性值，属性名:属性值...}
//在属性后边加上?表示属性是可选的
let b: { name: string, age?: number }
// b = {} //类型 "{}" 中缺少属性 "name"，但类型 "{ name: string; }" 中需要该属性。
b = { name: '孙悟空', age: 18 }

//[propName: string]: any 
let c: { name: string, [propName: string]: any }
c = { name: 'zhubajie', age: 18, sex: 'male' }

/**
 * 设置函数结构的类型声明
 *      语法：(形参:类型,形参:类型 ...)=>返回值
 */
let d: (a: number, b: number) => number
d = function (n1, n2): number {
    return n1 + n2
}


/**
 * 数组的类型声明
 *  类型[]
 *  Array<类型>
 */
//string[]表示字符串数组
let e: string[]
e = ['a', 'b', 'c']

//number[]表示数值数组
let f: number[]

let g: Array<number>

/**
 * 元组：固定长度的数组
 *  语法:[类型,类型]
 */
let h: [string, string]
h = ['hello', 'world']

/**
 * enum枚举
 */
enum Gender {
    Male = 0,
    Female = 1
}
let i: { name: string, gender: Gender }
i = {
    name: '唐僧',
    gender: Gender.Male
}
console.log(i.gender === 1);

let j: string | number
//&表示同时
let k: string & number

let l: { name: string } & { age: number }
l = { name: '孙悟空', age: 18 }

//类型的别名
type myType = string
let p: 1 | 2 | 3
let q: 1 | 2 | 3
let m: myType //string
type myType2 = 1 | 2 | 3
let n: myType2
n = 2