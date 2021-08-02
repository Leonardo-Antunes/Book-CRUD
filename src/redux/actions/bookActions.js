import actionTypes from "../actionTypes";

export default {
  addBook: (book) => ({
    type: actionTypes.ADD_BOOK,
    book,
  }),
  updateBook: (index, book) => ({
    type: actionTypes.UPDATE_BOOK,
    index,
    book,
  }),
  deleteBook: (index) => ({
    type: actionTypes.REMOVE_BOOK,
    index,
  }),
};
