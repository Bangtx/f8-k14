export interface BaseI {
  getId: () => number
  getName: () => string
  setName: (name: string) => void
  toString: () => string
}

export abstract class Base implements BaseI {
  private readonly id: number;
  private name: string;

  protected constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public abstract toString()

}

// base la 1 instance
// Base la 1 class

// private chi class do goi dc
// protected class do va cac con goi dc
// public coi chuong