import React from "react";
import { Provider } from "react-redux";
import store from "./redux/createStore";
import InputSection from "./components/InputSection";
import BooksSection from "./components/BooksSection";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>My Books</h1>
        <InputSection />
        <div className="line"></div>
        <BooksSection />
      </div>
    </Provider>
  );
}

export default App;
