interface Master {
  // id: number
  // name: string
}

interface PersonI extends Master {
  getId: () => number
  getName: () => string
  setName: (name: string) => void
  toMyString: () => void
}

class PersonEntity implements PersonI {
  private id: number
  private name: string

  constructor(id: number, name: string) {
    this.name = name
    this.id = id
  }

  getId(): number {
    return this.id
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }

  toMyString() {
    return `PersonEntity(id = ${this.getId()}, name = ${this.getName()})`
  }
}

// class EmployeeEntity implements PersonI {}
//
// const main = () => {
//   const a: PersonI = new PersonEntity(1, "name")
//
//   a = new EmployeeEntity()
//
// }











