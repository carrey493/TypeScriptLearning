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

##### boolean

```tsx
let isDone:bollean = false
```

##### string

```tsx
let color:string = 'blue'
color = 'red'
let fullName:string = 'Bob Bobbington'
let age:number = 37
let sentence:string = `hello my name is ${fullName}`
`I will be ${age+1} years old next month`
```

##### 字面量

```tsx
//也可以使用字面量去指定变量的类型，通过字面量可以确定变量的取值范围
let color:'red'|'blue'
let num:1|2|3
```

##### unknown

```tsx
let notSure:unknown = 4
```

##### void

```tsx
let unusable:void = undefined
```

##### never

```tsx
function error(message:string):never{
	throw new Error(message)
}
```

##### object

```tsx
let obj:object = {}
```

##### array

```tsx
let list:number[] = [1,2,3]
let list:Array<number> = [1,2,3]
```

##### tuple

```tsx
let x: [string,number]
x = ['hello',10]
```

##### enum

```tsx
enum Color {
    Red,
    Green,
    Blue
}
let c:Color = Color.Green

enum Color {
    Red = 1,
    Green,
    Blue
}
let c:Color = Color.Green

enum Color {
    Red = 1,
    Green = 2,
    Blue = 4
}
let c:Color = Color.Green
```

##### 类型断言

- 有些情况下，变量的类型对于我们来说是很明确的，但是TS编译器却并不清楚，此时，可以通过类型断言来告诉编译器变量的类型，断言有两种形式

  - 第一种

  ```tsx
  let someValue:unknow = 'this is a string'
  let strLength:number = (someValue as string).length
  ```

  - 第二种

  ```tsx
  let someValue:unknow = 'this is a string'
  let strLength:number = (<string>someValue).length
  ```

## 四.编译选项

### 1.自动编译文件

- 编译文件后，使用-w指令后，TS编译器会自动监视文件的变化，并在文件发生变化时对文件进行重新编译
- tsc xxx.ts -w

### 2.自动编译整个项目

- 如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。

- 但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 tsconfig.json

- tsconfig.json是一个JSON文件，添加配置文件后，只需只需tsc命令即可完成对整个项目的编译

- 配置选项
  - include
    - 定义希望被编译文件所在的目录
    
    - 默认值: ['**/*']
    
    - 示例
      - ```
        "include":['src/**/*','tests/**/*']
        ```
      
      - 上述示例中，所有src目录和tests目录下的文件都会被编译
    
  - exclude
  
    - 定义需要排除在外的目录
    - 默认值:["node_modules", "bower_components". "jspm_packages"]
    - 示例
      - "exclude"": ["./src/he1lo/**/*]
      - 上述示例中，src 下hello目录下的文件都不会被编译
  
  - extends
  
    - 定义被继承的配置文件
    - 示例:
      - "extends ": ". / configs / base"
      - 上述示例中，当前配置文件中会自动包含config目录下base.json中的所有配置信息
  
  - files
  
    - 指定被编辑文件的列表，只有需要编译的文件少时才会用到
    - 示例
    ```json
    "files":[
    	" core.ts",
    	"sys.ts",
    	"types.ts",
    	"scanner.ts"",
    	"parser.ts ",
    	"utilities.tS,
    	"binder.ts ",
    	"checker.ts ",
    	"tsc.ts"
    ]
    ```
  - 列表中的文件都会被TS编译器所编译

### 3.compilerOptions

- 编译选项是配置文件中非常重要的也比较复杂的配置选项

- 在compilerOptions中包含多个子选项，用来完成对编译的配置

  - 项目配置

    - target

      - 设置ts代码编译的目标脚本

      - 可选值

        - ES3(默认)、ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2020、ESNext

        - 示例

          - ```json
            "compilerOptions":{
            	"target":"ES6"
            }
            ```

          - 如上设置，我们所编写的代码将会被编译为ES6代码版本的js

    - lib

      - 指定代码运行时所包含的库（宿主环境）

      - 可选值

        - ES5、ES6/ES2015、ES7/ES2016、ES2017、ES2020、ESNext、DOM、WebWorker、ScriptHost

      - 示例

        - ```json
          "compilerOptions":{
          	"target":"ES6",
          	"lib":["ES6","DOM"]
          }
          ```

    - module

      - 设置编译后代码使用的模块化系统

      - 可选值

        - CommonJS、UMD、AMD、System、ES2020、ESNext、None

      - 示例

        - ```json
          "compilerOptions":{
          	"module":"CommonJS"
          }
          ```
      
    - outDir
    
      - 编译后文件的所在目录
    
      - 默认情况下，编译后的js文件会和ts文件位于相同的目录，设置outDir后可以改变编译后的文件位置
    
      - 示例
    
        - ```json
          "compilerOptions":{
          	"outDir":"dist"
          }
          ```
    
    - outFile
    
      - 将所有的文件编译为一个js文件
    
      - 默认会将所有的编写在全局作用域这的代码合并为一个js文件，如果module制定了None、System或AMD则会将模块一起合并到文件之中
    
      - 示例
    
        - ```json
          "compilerOptions":{
          	"outFile":"dist/app.js"
          }
          ```
    
    - rootDir
    
      - 指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录，通过rootDir可以手动指定根目录
    
      - 示例
    
      - ```json
        "compilerOptions":{
        	"rootDir":"./src"
        }
        ```
    
    - allowJs
    
      - 是否对js文件编译
    
    - checkJs
    
      - 是否对js文件进行检查
    
      - 示例
    
        - ```json
          "compilerOptions":{
          	"allowJs":true,
          	"checkJs":true
          }
          ```
    
    - removeComments
    
      - 是否删除注释
      - 默认值:false
    
    - noEmit
    
      - 不对代码进行编译
      - 默认值:false
    
    - sourceMap
    
      - 是否生成sourceMap
      - 默认值:false

    - alwaysStrict
  
      - 是否生成sourceMap用来设置编译后的文件是否使用严格模式，默认是false
      - 默认值:false

    - noImplicitAny
  
      - 不允许声明隐式any
      - 默认值:false

    - noImplicitThis
  
      - 不明确不明类型的this
      - 默认值:false
      
    - strictNullChecks
  
      - 严格的检查空值
      - 默认值:false
  
    - strict
  
      - 所有严格检查的总开关
      - 默认值:false

## 五.webpack打包TS代码

- 通常情况下，实际开发中我们都需要使用构建工具对代码进行打包，TS同样也可以结合构建工具一起使用，下边以webpack为例介绍一下如何结合构建工具使用TS。
- 步骤:
  - 1.初始化项目
    - 进入项目根目录,执行命令npm init -y
    - 主要作用:创建package.json文件
  - 2.下载构建工具
    - npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-p1ugin
      - 共安装了7个包
        - webpack
          - 构建工具webpackm 
        - webpack-cli
          - webpack的命令行工具 
        - webpack-dev-server
          - webpack的开发服务器
        - typescript
          - ts编译器
        - ts-loader
          - ts加载器，用于在webpack中编译ts文件
        - clean-webpack-plugin
          - webpack中的清除插件，每次构建都会先清除目录
  - 3.根目录下创建webpack的配置文件webpack.config.js
  ```js
  //引入一个包
  const path = require('path')

  //webpack 中所有的配置信息都应该写在module.exports中
  module.exports = {
      //指定入口文件
      entry: './src/index.ts',
      //指定打包文件所在目录
      output: {
          path: path.resolve(__dirname, 'dist'),
          //打包后文件名
          filename: 'bundle.js'
      },
      //指定webpack打包时要使用的模块
      module: {
          //指定要加载的规则
          rules: [
              {
                  //test指定规则生效的文件
                  test: /\.ts$/,
                  //要使用的loader
                  use: 'ts-loader',
                  //要排除的文件
                  exclude: /node_modules/
              }
          ]
      }
  }
  ```
  - 4.根目录下创建ts的编译文件tscongig.json
  ```json
  {
    "compilerOptions": {
        "module": "ES2015",
        "target": "ES2015",
        "sourceMap": false,
        "strict": true
    }
  }
  ```

  - 5.package.json文件下配置打包命令
  ```json
  "build": "webpack --mode development"
  ```

  - 6.安装几个插件
    - html-webpack-plugin:配置项目自定生成一个html文件
    - webpack-dev-server:配置start命令,可以自动打开html文件,并且是热更新动态变化
    - clean-webpack-plugin:在编译生成dist文件夹之前先清除原本的dist文件夹

  在webpack.config.js配置webpack的插件
  ```js
    plugins: [
        new HTMLWebapckPlugin({
          //自定义生成需要展示的html文件指定其对应的路径
          // title:'自定义title'
          template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    //用来配置模块
    resolve: {
        extensions: ['.ts', '.js']//ts,js文件都可以作为模块导出
    }
  ```
  在package.json配置start命令,可以自动打开html文件,并且是热更新动态变化
  ```json
  "start": "webpack serve --open --mode development"
  ```

