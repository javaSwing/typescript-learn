// // 这个文件主要用于说明typescript中支持的数据类型，以及声明方法

// // 1、布尔类型
// let isDone: boolean = false;

// // 2、数字类型:和JavaScript中的类型一样，数字都是浮点类型，除了支持十进制和十六进制字面量，TypeScript还引入了ES6的二进制和八进制
// let num: number = 2;
// let hexLiteral: number = 0xf00d;
// let binaryLiteral: number = 0b100;
// let octalLiteral: number = 0o744;

// // 3、字符串类型：支持模板字符串形式编写，用 "" 或者 '都是可以的
// let name2: string = `javaSwing`;
// let stentce: string = `这里有${num}个人
// 应该写什么呢`;

// // 4、数组类型
// let arr: number[] = [1, 2, 3];

// // 泛型表达方式
// let arr2: Array<number> = [3, 4, 5, 6];

// // 5、元组类型 Tuple ：用于表示一个已知元素数量和类型的数组

// let x: [string, number] = ['s', 2];
// // 访问一个已知索引的元素，会得到正确的类型
// console.log(x[0].substring(1));
// // console.log(x[1].substring(1)); // 编译不通过会提示number类型没有substring方法

// // 当访问一个越界的元素，会使用联合类型进行替代，即(number, string都行)
// x[2] = '测试用';
// x[2] = 3;

// // x[6] = false; // 错误，必须是声明元组类型number和string中的一个

// // 6、枚举 在ts中这个数据类型是对js的补充进行
// // enum Color { Red, Green, Blue }
// // let c:Color = Color.Red

// // a. 默认情况下从0开始进行元素编号，你也可以手动指定成员的数值，例如：我们可以让上面的例子从一开始编号
// // enum Color { Red = 1, Green, Blue }
// // let c:Color = Color.Red

// // 或者进行全部手动赋值
// enum Color { Red = 1, Green = 2, Blue = 4 }
// let colorName: string = Color[2]
// alert(colorName) // Green

// // 7、any 类型
// // any类型主要是不确定一个变量类型所设定的，或者我们加入了一些第三方的库，只是为了能编译通过，不希望编译器进行检查

// let exitNum: any = 5;
// exitNum = '退出了';
// exitNum = false; // 可以改变其数据类型

// // Object不同的地方是，不能对Object类型调用不存在的方法，而any类型却可以

// let notSure: any = 4;
// notSure.ifItExit(); // ok
// notSure.toFixed(); // ok;

// let prettySure: Object = 5;
// // prettySure.toFixed(); // error 不存在的方法

// // 8、void类型，从某种程序上来说void类型与any类型是相反的，它表示没有任何类型，当一个函数没有返回值的时候，你通常见到你返回值是void
// // 而且你只能赋值undefined 和 null

// function sayName(): void {
//   alert('你好')
// }

// let unusable: void = null;
// let unusable2: void = undefined;

// // 9、Null和 Undefined 
// // 在TS中, null 和 undefined 都有各自的类型分别叫做 null 和 undefined, 和void类型，它们本身的用处不大

// let u: null = null;
// let n: undefined = undefined;

// // null 和 undefined 是所有类型的子类型，


// // 10、Never类型表示那些永远不存在的类型，例如：never是那些总是会抛出异常或者根本就不会的返回值的函数或者箭头函数表示式的
// // 返回值类型

// // 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//   throw new Error(message)
// }

// function fail() {
//   return error(" error ");
// }

// // 返回never的函数存在无法到达的终点
// function initLoop(): never {
//   while(true) {

//   }
// }

// //--------------------------------------------------------------------------------------------->
// // 类型断言
// // 就是自己手动设置一个变量的类型，而且自己确认这个变量在运行时的类型，相当于告诉编译器我已经知道这个类型，你执行就好

// // 第一种类型
// // let someValue: any = "this is a string";
// // let strLen:number = (<string>someValue).length;

// // 第二种类型
// let someValue: any = "this is a string";
// let strLen:number = (someValue as string).length; // 如果使用TS写JSX只能使用这种方式



