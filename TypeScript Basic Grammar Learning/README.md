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

