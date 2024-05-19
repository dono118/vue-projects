// 定义一个接口，规范和约束对象类型的属性及其类型
export interface IPerson {
  id: string
  name: string
  age: number
}

// 自定义类型
// export type TPersons = Array<IPerson>
export type TPersons = IPerson[]
