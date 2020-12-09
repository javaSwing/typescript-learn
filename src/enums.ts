// ts中的枚举(enums)是js中所没有的
// 在C#和Java中包含的类型，是被限定在一定范围内的场景

// 1. 数字枚举，如果不指定值，默认是从0开始
// enum Color {
//   Red,
//   Blue,
//   Green
// }

// Color.Blue = '32323'; // error Cannot assign to 'Blue' because it is a read-only property.

// console.log(Color.Blue) // 1

// console.log(Color['Red']); // 0
// console.log(Color[0]); // Red
// console.log(Color[Color.Blue]); // Blue

// 2. 改变数字检举关联的数字
// 通过指定第一个枚举的值之后，可以通过指定第一个枚举的初始值，来改变整个枚举的值
// 通常一般指定枚举的第一个值为1，做一个安全可靠的检查

enum Color {
  Red = 3, // 3
  Blue, // 4
  Green // 5
}

// 3. 数字枚举与位运算,
// 根据我之前的工作经验结合枚举与位运算，可以用一个数值包含多个枚举的组合，很灵活。

// enum FoodsFlag {
//   None = 0,
//   isHot = 1 << 0, // 热的属性
//   hasMeat = 1 << 1, // 含有肉
//   hasVeg = 1 << 2, // 含有蔬菜
//   hasRice = 1 << 3, // 含有米饭
//   hasDough = 1 << 4 // 含有面食
// }

// // 上面枚举对应的二进制数字为

// // None:     00000
// // isHot:    00001
// // hasMeat:  00010
// // hasVeg:   00100
// // hasRice:  01000
// // hasDough: 10000

// // 可以通过组合一个数字来实现一个食物含有多个特性

// // 小笼包：热、有肉、有面皮: 10011

// // 通过运算符： 位或| 进行组合多个属性值

// interface Foods {
//   name: string;
//   property: FoodsFlag;
// }


// const xiaolongbao: Foods = {
//   name: '小笼包',
//   property: FoodsFlag.isHot | FoodsFlag.hasMeat | FoodsFlag.hasDough // 19
// }

// // 在使用时判断是否有枚举的某个特性使用运算符 位与& 

// console.log(xiaolongbao.property & FoodsFlag.isHot) // 1 在js中1代表boolean true

// console.log(xiaolongbao.property & FoodsFlag.hasRice) // 0  false

// // 枚举与位运算的这种方式，适合与一个数值包含多个特性的情况可以使用，但是后端也要同样支持。如果一个枚举值代表一个特性正常使用即可

// 4. 字符串枚举
// 字符串枚举使用的就是，枚举值可以与普通的字符串相比较，与常量类似

enum Status {
  SUCCESS = 'success',
  FAIL = 'fail',
  LOADING = 'loading'
}


// 5. 常量枚举
const enum Tristate {
  False,
  True,
  Unknown
}

const lie = Tristate.False;
