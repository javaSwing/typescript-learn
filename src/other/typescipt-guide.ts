// TS中的内置类型与自定义类型

// keyof T这个语法，是指把一个类型T中的所有属性都取出来
// in 表示循环keyof取得的所有属性

// 1. Partial (部分的)
// 语法如下：把一个类型T的所有属性变为可选属性

// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };


// interface Person {
//   name: string;
//   age: number;
//   gender: 'male' | 'female';
// }

// const model: Partial<Person> = {}

// 2. Required 与Partial相反表示所有类型都是必须的
// 其中的-?可以理解为把可选属性的?给去除

// type Required<T> = {
//   [P in keyof T]-?: T[P];
// };

// interface Pen {
//   type: string;
//   name?: string;
//   color?: string;
// }

// const p: Required<Pen> = {
//   type: 'single',
//   name: 'pen',
//   color: 'bue'
// }

// 3. Pick<T, K>
// 从T中选取部分属性K

/**
 * From T, pick a set of properties whose keys are in the union K
 */
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };


// interface Person {
//   name:string;
//   sex: 0 | 1;
//   age: number;
// }


// const user: Pick<Person, 'age' | 'name'> = {
//   name: 'javaswing',
//   age: 18
// }

// 4. Record<K, T> 用于标记对象的key value类型

// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// };

// const user: Record<'name'| 'age', string> = {
//   name: 'javaswing',
//   age: '18'
// }

// function mapObject<K extends string | number, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U> { }
// const names = { foo: 'hello', bar: 'world', baz: 'bye' }
// const length = mapObject(names, s => s.length)

// 5. Exclude<T, U>, Omit<T, K>
// 移除T中U的属性
/**
 * Construct a type with the properties of T except for those in type K.
 */
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// interface Person {
//   name: string;
//   age: number;
// }

// type s = Omit<Person, 'name'>

// 6. Exctract<T, U>
// Exclude的反操作，取T U的交集

// type A = Extract<'a'|'b'|'c'|'d' ,'b'|'c'|'e' >  