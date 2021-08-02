import React from "react";
import "./BookItem.style.scss";

const BookItem = ({ title, content, onItemClicked }) => {
  return (
    <div 
      className="BookItem_container"
      role="button"  
      onClick={onItemClicked}
    >
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BookItem;
