// ts中的函数(function)

// 1. 函数类型
// 在JS中函数分为声明式类型和函数表达式类型，在TS中的例子使用的都是函数表达式的方式来定义类型
// const a = (x) => x+1 这种表达式类型

// let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { return x + y }
// 注： 在第一个"="之前是对于函数表达式类型的定义，=号之后是函数的实现，如果一个函数没有返回类型要使用void返回
// => 在TS的定义中代表函数的意思。=>前是参数类型。=>后是返回值类型

// 2. 推断类型(Inferring the types)
// 如果你在赋值语句的一边指定了类型，但是另一边没有类型的话。Typescrip编译器会自动识别出类型
// 也叫“上下文归类”


// let myAdd = function (x: number, y: number): number {
//   return x + y
// }

//  // 这里没有写全对于函数类型的定义，TS也能准备的推断出函数的类型
// let myAdd2: (x: number, y: number) => number = function(x, y) {
//   return x + y;
// }


// 3. 可选参数和默认参数

// 3.1 可选参数,就是在参数后面加一个?号代表这个参数是可选的。但是注意：一定是在最后面

// function sayHello(name: string, words?: string) {
//   const w = words ?? 'hello'
//   return name + ' say : ' + w;
// }

// console.log(sayHello('javaswing')) // javaswing say : hello

// console.log(sayHello('javaswing', 'xxx')) // javaswing say : xxx

// 3.2 默认参数，使用参数 = 默认值的语法

// function sayHello(name: string, words = 'hello2') {
//   return name + ' : ' + words;
// }

// console.log(sayHello('javaswing')) // javaswing : hello2

// console.log(sayHello('javaswing', 'xxx')) // javaswing : xxx

// 可选参数与默认参数在类型描述上都一样的，两者共享参数类型：name: string, words?: string

// 4. 剩余参数(Rest Parameters)
// 与ES6的解析类型使用...代表, 剩余参数一定是在参数的最后位

// function createPerson (name: string, age: number, ...rest:string[]) {
//   return name + " age: " + age + ' ' + rest.join(' ')
// }

// console.log(createPerson('javaswing', 29, 'code', 'learn')) // javaswing age: 29 code learn

// TODO: 5. javascript中的this

// 6. 重载(overloads)
// 如果一个函数允许接收多种参数类型，这对于文档 + 类型安全很实用。

// function reverse(x: number): number;
// function reverse(x: string): string;
// function reverse(x: number | string) : number | string {
//   if(typeof x === 'string') {
//     return x.split('').reverse().join('')
//   }else if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   }
// }


// console.log(reverse(123456)); // 654321
