import {Person} from './person.js'


export class Male extends Person {
  #girlFriend;

  constructor(name, age, girlFriend) {
    super(name, age)
    this.#girlFriend = girlFriend
  }

  getGirlFriend() {
    return this.#girlFriend
  }

  setGirlFriend(girlFriend) {
    this.#girlFriend = girlFriend
  }

  eat() {
    console.log('eat at male')
  }
}