//可以直接使用字面量进行类型声明
let a: 10
a = 10
// a=11

//可以使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female'
b = 'male'
b = 'female'

let c: boolean | string
c = true
c = 'hello'

//any表示的是任意类型，一个变量设置为any类型后相当于对该变量关闭了TS的类型检测
//不建议使用
let d: any
d = 10
d = 'hello'
d = true
d = {}

//unknow 表示未知类型的值 
//unknow类型的值，不能直接赋值给其它变量
let e: unknown
e = 10
e = 'hello'
e = true
e = {}

let s: string
if (typeof e === 'string') {
    s = e
}
//类型断言，可以用来告诉解析器变量的实际类型
s = e as string
s = <string>e

//void用来表示空 以函数为例 就表示没有返回值
function fn(): void {
}

//never 表示永远不会返回结果
//console.log alert Error
function fn2(): never {
    throw new Error('报错了')
}