// ts中的interface(接口)


// 1.1 interface用来描述参数

// interface LablededValue {
//   label: string;
// }

// function printLabel(labeledObj: LablededValue) {
//   console.log(labeledObj.label)
// }

// let myObj = { size: 10, label: 'size 10 label' };

// printLabel(myObj)


// 函数类型

// 函数类型分为：函数声明（Funtion Declaration）和函数表达式（Function Expression）

interface SearchFunc { // 此interface描述为，函数表达式方式，:的左边为函数的输入，右边为函数的输出。
  (source: string, subString: string): boolean;
}

// 在TS中的 => 用来表示函数的定义，不要和ES6中箭头函数搞混了。其中 => 左侧为输入类型，右侧为输出类型。
let mySum: (x: number, y: number) => number = function (x:number, y:number):number {
  return x + y
}