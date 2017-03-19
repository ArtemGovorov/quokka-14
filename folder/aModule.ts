function p() {
  console.log("p(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("p(): called");
  }
}

class A {
  @p()
  m() { }
}
export default A
