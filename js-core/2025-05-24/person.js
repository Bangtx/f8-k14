export class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name
    this.#age = age
  }

  setName(name) {
    this.#name = name
  }

  setAge(age) {
    this.#age = age
  }

  getName() {
    return this.#name
  }

  getAge() {
    return this.#age
  }

  eat() {
    console.log('eat at person')
  }

}