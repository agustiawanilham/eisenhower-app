import React, { Component } from "react";
import TodoList from "./TodoList  ";

class MatrixBoard extends Component {
  render() {
    return (
      <div className="board">
        <h3>Matrix Board : Do</h3>
        <TodoList />
      </div>
    );
  }
}
export default MatrixBoard;
