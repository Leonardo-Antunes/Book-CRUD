import actionTypes from "../actionTypes";

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK: {
      const books = [...state.books];
      books.push(action.book);
      return {
        books,
      };
    }
    case actionTypes.UPDATE_BOOK: {
      const { index, book } = action;
      const books = [...state.books];
      books[index] = book;
      return {
        books,
      };
    }
    case actionTypes.REMOVE_BOOK: {
      const { index } = action;
      const books = [];
      state.books.forEach((book, i) => {
        if (index !== i) {
          books.push(book);
        }
      });
      return {
        books,
      };
    }
    default:
      return state;
  }
};
