// TS中的泛型

// 1. 泛型之Hello World
// function identity (arg: any) {
//   return arg
// }

// 泛型版本函数
// function identity<T> (arg: T): T {
//   return arg;
// }

// 第一种使用方法在函数之后使用<>中传入指定的类型
// let res = identity<string>('javaswing');
// console.log(res) // javaswing

// 第二种利用类型推论-编译器会根据传入的参数自动帮助我们确定T的类型
// let re = identity(2);
// console.log(re)

// 2. 使用泛型变量,使用泛型做为一个变量进行变成为其它类型

// function loggerIdentity<T>(arg: T[]) {
//   console.log(arg.length)
//   return arg
// }


// loggerIdentity([2, 2, 2])

// 3. 泛型类型

// function identity<T> (arg: T): T {
//   return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity; // 泛型函数，与正常的函数描述前面多加了一个<T>


// interface GenericIdentityFn<T> {
//   (arg: T): T
// }

// 4. 泛型类

// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// 5. 泛型约束

interface Lengthwise {
  length: number;
}

function identity<T extends Lengthwise>(arg: T) {
  console.log(arg.length)
  return arg
}

// identity(2); // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'

// identity({length: 1, value: 2}); // 传入符合指定约束的类型值

// 6. 在泛型类型中使用类型参数

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key]
// }

// let ob ={name: 'javaswing', age: 28}

// console.log(getProperty(ob, "age")); // 28
// console.log(getProperty(ob, "name")); // javaswing

// 7. 在泛型中使用类类型

// function create<T>(c: new () => T): T{
//   return new c()
// }

// 使用原型属性推断并约束构造函数与类实例的关系
// class BeeKeepr {
//   hasMark: boolean;
// }

// class ZooKeeper {
//   nametag: string;
// }

// class Animal {
//   numLegs: number;
// }


// class Bee extends Animal {
//   keeper: BeeKeepr;
// }

// class Loin extends Animal {
//   keeper: ZooKeeper;
// }

// function createInstance<T extends Animal>(c: {new (): T}):T {
//   return new c();
// }

// createInstance(Loin).keeper.nametag;
// createInstance(Bee).keeper.hasMark;