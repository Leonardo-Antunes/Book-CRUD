import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BookItem from "./BookItem";
import inputActions from "../redux/actions/inputActions";
import "./BooksSection.style.scss";

const BooksSection = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputTitle(item.title));
    dispatch(inputActions.setInputContent(item.content));
  };

  if (books.length === 0) {
    return (
      <div className="BookSection_container_empty">
        <p>Não há livros, adione o primeiro!</p>
      </div>
    );
  }

  return (
    <div className="BookSection_container">
      {books.map((item, index) => {
        if (item) {
          return (
            <BookItem
              title={item.title}
              content={item.content}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />
          );
        }
        return null
      })}
    </div>
  );
};

export default BooksSection;
