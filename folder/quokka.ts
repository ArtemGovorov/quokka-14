import A from './aModule'

const a = new A()
a

function t() {
  console.log("t(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("t(): called");
  }
}

class B {
  @t()
  m() { }
}
