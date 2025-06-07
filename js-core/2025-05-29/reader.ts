import {Base, BaseI} from "./base";

interface ReaderI extends BaseI {
  getBorrowBooks: () => number[]
  setBorrowBooks: (borrowBooks: number[]) => void
}

class Reader extends Base implements ReaderI {
  private borrowBooks: number[];

  constructor(id: number, name: string, borrow_books: number[] = []) {
    super(id, name)
    this.borrowBooks = borrow_books;
  }

  public getBorrowBooks(): number[] {
    return this.borrowBooks;
  }

  public setBorrowBooks(borrowBooks: number[]): void {
    this.borrowBooks = borrowBooks;
  }

  public toString() {
    return `Reader {
      id = ${this.getId()}
      name = ${this.getName()}
      BorrowBooks = ${this.getBorrowBooks()}
    }`
  }
}
