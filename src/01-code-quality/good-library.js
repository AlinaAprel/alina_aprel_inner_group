// eslint-disable-next-line import/no-unresolved
import { books, categories, authors } from 'store.js';

const CONSTANTS = { FIRST: 10, LAST: 20 };

export class library {
  constructor(ID, bookId, text) {
    this.ID = ID;
    this.bookId = bookId;
    this.text = text;
  }

  getBook(...args) {
    const options = { ...args[1] };
    if (this.ID > CONSTANTS.LAST) return { book: books[books.length - 1] };
    if (this.ID < CONSTANTS.FIRST) {
      // first book
      // eslint-disable-next-line no-new-object
      return new Object();
    }
    return {
      name: books[this.ID].name,
      price: books[this.ID].price,
      hasCategory: options.hasCategory,
      hasAuthor:
        authors.books[this.ID] !== undefined ? true : options.hasAuthor,
    };
  }

  getCategory() {
    const findCategory = (id) => {
      // eslint-disable-next-line no-unreachable-loop
      for (let i = 0; i < categories.length; i += 1) {
        if (
          categories[i].id === id
          || (categories[i].hasBooks === true
          && categories[i].booksType === 'main')
        ) {
          return categories[i];
        }
      }
      // eslint-disable-next-line no-new-object
      return new Object();
    };

    const Category = findCategory(books[this.bookId].categoryId);
    if (Category) return { id: `category_${Category}` };
    // eslint-disable-next-line no-new-object
    return new Object();
  }

  showMessage() {
    console.log(this.text);
  }
}
