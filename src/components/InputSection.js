import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bookActions from "../redux/actions/bookActions";
import inputActions from "../redux/actions/inputActions";
import "./InputSection.style.scss";

const InputSection = () => {
  const id = useSelector((state) => state.inputs.id);
  const title = useSelector((state) => state.inputs.title);
  const content = useSelector((state) => state.inputs.content);
  const dispatch = useDispatch();

  const addBook = () => {
    if (title && content) {
      dispatch(
        bookActions.addBook({
          title,
          content,
        })
      );
      dispatch(inputActions.resetInputs());
    }
  };

  const updateBook = () => {
    if (title && content) {
      dispatch(
        bookActions.updateBook(id, {
          title,
          content,
        })
      );
      dispatch(inputActions.resetInputs());
    }
  };

  const deleteBook = () => {
    dispatch(bookActions.deleteBook(id));
    dispatch(inputActions.resetInputs());
  };

  return (
    <div className="InputSection_container">
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => dispatch(inputActions.setInputTitle(e.target.value))}
      />
      <textarea
        placeholder="Book Content"
        value={content}
        onChange={(e) => dispatch(inputActions.setInputContent(e.target.value))}
      ></textarea>
      <div className="InputSection_container_btnWrapper">
        <button onClick={id === -1 ? addBook : updateBook}>
          {id === -1 ? "ADD BOOK" : "UPDATE BOOK"}
        </button>
        {id !== -1 && (
          <button
            onClick={deleteBook}
            style={{ marginLeft: "1em", backgroundColor: "red" }}
          >
            {" "}
            DELETE BOOK{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputSection;
