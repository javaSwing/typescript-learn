// ts中的interface(接口)


// 1. interface用来描述参数

// interface LablededValue {
//   label: string;
// }

// function printLabel(labeledObj: LablededValue) {
//   console.log(labeledObj.label)
// }

// let myObj = { size: 10, label: 'size 10 label' };

// printLabel(myObj)

// 2. 可选择属性(optional Properties)，在接口中一个属性要是可选属性可在其属性名之后添加?

// interface SquareConfig {
//   color?: string; // 标记为optional properties
//   width: number;
// }

// 缺少width属性
// let seq: SquareConfig = { // Property 'width' is missing in type '{ color: string; }' but required in type 'SquareConfig'.ts(2741)
//   color: 'red'
// }

// let seq: SquareConfig = {
//   width: 100,
//   color: 'blue',
//   name: '22' // error 不允许添加未定义的属性
// }

// let seq: SquareConfig = {
//   width: 100,
//   color: 'orange'
// }


// 3. 任意属性 (Excess Property Checks)
// 允许一个接口有任意属性

// interface Person {
//   name: string;
//   age?: number;
//   [propName: string]: any;// 任意属性的定义
// }


// let tom: Person = {
//   name: 'tom',
//   gender: 'male'
// }


// interface Person {
//   name: string;
//   [propName: string]: string; // 定义了任意属性的值类型必须为string
// }

// let lucy: Person = {
//   name: 'lucy',
//   age: 23 // error Type 'number' is not assignable to type 'string'.
// }


// 4. 只读属性 (readOnly properties)
// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，可以使用readonly定义

// interface Person {
//   readonly id?: number;
//   name: string;
//   age?: number;
//   [propName: string]: any
// }

// let me: Person = {
//   id:1,
//   name: 'javaswing',
//   gender: 'male'
// }

// me.id = 10; // 初始化之后赋值，报错。Cannot assign to 'id' because it is a read-only property.

// let you: Person = {
//   name: 'your name'
// }

// you.id = 10; // 初始化之后再次进行赋值也会出错




// 5. 函数类型 (Function Types)

// 函数类型分为：函数声明（Funtion Declaration）和函数表达式（Function Expression）

// interface SearchFunc { // 此interface描述为，函数表达式方式，:的左边为函数的输入，右边为函数的输出。
//   (source: string, subString: string): boolean;
// }

// // 在TS中的 => 用来表示函数的定义，不要和ES6中箭头函数搞混了。其中 => 左侧为输入类型，右侧为输出类型。
// let mySum: (x: number, y: number) => number = function (x:number, y:number):number {
//   return x + y
// }

// 6. 可索引的类型(Indexable Types)
// 与使用接口描述函数差不多，比如：a[10] person["name"]。这样的索引签名

// interface StringArray {
//   [index: number]: string;
// }

// let myArray: StringArray;
// myArray = ["javaswing", "feed"]

// let str: string = myArray[0]

// 6.1 索引签名：字符串和数字，可以同时使用两种索引，但是数字类型索引返回的类型必须是字符串索引返回值类型的子类型。
// 这是因为当使用number来索引时，javascript会将他转换成为string类型，即a[10] = a["10"]


// class Animal {
//   name: string;
// }

// class Dog extends Animal {
//   breed: string;
// }


// interface NotOKay {
//   [index: number]: Animal; // error Numeric index type 'Animal' is not assignable to string index type 'Dog'.
//   [index: string]: Dog;
// }

// 6.2 Dictionary 字符串索引能很好的描述dictionary模式

// interface NumberDictionary {
//   [index: string]: number;
//   length: number;
//   name: string; // error  Property 'name' of type 'string' is not assignable to string index type 'number'.
// }

// 最后可以使用readonly来让索引设置为只读，不能通过索引修改其值

// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }

// let myArray: ReadonlyStringArray = ["Alice", "javaswing"]

// myArray[0] = 'ss'; // error Index signature in type 'ReadonlyStringArray' only permits reading.


// 7. 类类型(Class Types)
// 7.1 实现接口 (implementing an interface) 

// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
//   currentTime: Date = new Date();
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number) { }
// }

// 7.2 类静态部分与实例部分的区别(Difference between the static and instance sides of classes)

// 在interface中只能描述实例部分，不能描述类的静态部分，而constructor正好是静态部分
// interface ClockConstructor {
//   new (hour: number, minute: number);
// }

// class Clock implements ClockConstructor { // error  Type 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'
//   currentTime: Date;
//   constructor(h: number, m: number) { }
// }

// 使用以下方法来实现对于constructor的约束，
// TODO: 实现对于constructor的约束暂时不是很明白

// interface ClockConstructor {
//   new(h: number, m: number): ClockInterface;
// }


// interface ClockInterface {
//   tick(): void;
// }

// const Clock: ClockConstructor = class Clock implements ClockInterface {
//   constructor(h: number, m: number) { }
//   tick() {
//     console.log('beep beep')
//   }
// }

// 7.3 继承接口(extending interface)
// 接口的相互之间是可以相互继承的来实现更加复杂的元素

// interface Shape {
//   color: string;
// }

// interface PenStroke {
//   penWidth: number;
// }

// interface Square extends Shape, PenStroke {
//   sideLength: number;
// }

// let square = {} as Square;

// square.color = 'blue';
// square.sideLength = 10;
// square.penWidth = 5.0;

// 7.4 混合类型(Hybird Types)
// 在javascript中一个对象可以同时做为函数和对象使用
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }

// function getCounter(): Counter {
//   let counter = function (start: number) { } as Counter;
//   counter.interval = 123;
//   counter.reset = function () { }
//   return counter;
// }


// let c = getCounter()
// c(10);
// c.reset()
// c.interval = 5.0;

// 7.5 接口继承类(interface extending classes)
// 接口继承类，只是声明了中类存在的成功，接口同样也会继承到类的private和protected成员，
// 这意味着要实现此继承类的接口，则此类必须为接口继承类或者其子类，才能被implement
// class Control {
//   private state: any;
// }

// interface SelectableControl extends Control {
//   select(): void;
// }

// class Button extends Control implements SelectableControl {
//   select() { }
// }

// class TextBox extends Control {

// }

// // error Property 'state' is missing in type 'Image' but required in type 'SelectableControl'.
// class Image implements SelectableControl {
//   select() { }
// }

// class Location {

// }
