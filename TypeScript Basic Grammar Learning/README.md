## TypeScript  Basic Grammer Learning

### 一.TypeScript简介

#### 1.TypeScript是什么

- 以JavaScript为基础构建的语言
- 一个JavaScript的超集
- 可以在任何支持JavaScript的平台执行
- TypeScript扩展了JavaScript 并添加了类型
- TS不能被JS解析器直接执行

TS===编译===>JS

#### 2.TypeScript增加了什么

- 类型
- 支持ES的新特性
- 添加ES不具备的新特性
- 丰富的配置选项

### 二.TypeScript开发环境搭建

#### 1.下载Node.js

- 64位: https://nodejs.org/dist/v14.15.1/node-v14.15.1-x64.msi
- 32位: https://nodejs.org/dist/v14.15.1/node-v14.15.1-x86.msi

#### 2.安装Node.js

#### 3.使用npm全局安装typescript

- 进入命令行
- 输入 npm i -g typescript

#### 4.创建一个ts文件

#### 5.使用tsc对文件进行编译

- 进入命令行
- 进入ts文件所在目录
- 执行命令： tsc xx.ts

### 三.TS基本类型

#### 1.类型声明

- 类型声明是TS非常重要的一个特点
- 通过类型声明可以指定TS变量（参数、形参）的类型
- 指定类型后，当为变量赋值时，TS编译器会自动检查值是否符合类型声明，符合则赋值，否则报错
- 简而言之，类型声明给变量设置了类型，使得变量只能存储某种类型的值

语法

```
let 变量：类型
let 变量：类型 = 值
function fn(参数：类型，参数：类型)：类型{
	...
}
```

#### 2.自动判断类型

- TS拥有自动的类型判断机制
- 当变量的声明和赋值是同时进行的，TS编译器会自动判断变量的类型
- 所以如果你的变量的声明和赋值是同时进行的，可以省略掉类型的声明

#### 3.类型

| 类型    | 举例            | 描述                         |
| ------- | --------------- | ---------------------------- |
| number  | 1 -33 5         | 任意数字                     |
| string  | 'hello' 'hhi'   | 任意字符串                   |
| boolean | true false      | 布尔值true / false           |
| 字面量  | 其本身          | 限制变量的值就是该字面量的值 |
| any     | *               | 任意类型                     |
| unknow  | *               | 类型安全的any                |
| void    | 空值(undefined) | 没有值(或undefined)          |
| never   | 没有值          | 不能是任何值                 |
| object  | {name:'孙悟空'} | 任意的js对象                 |
| array   | [1,2,3]         | 任意JS数组                   |
| tuple   | [4,5]           | 元素，TS新类型，固定长度数组 |
| enum    | enum{A,B}       | 枚举，TS中新增类型           |

##### number

```tsx
let decimal : number = 6
let hex : number = 0xf00d
let binary : number = 0b1010
let octal : number = 0o744
let big : bigint = 100n
```

