import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul className="list-group md-5">
        <h3 className="text-capitalize text-center"></h3>
        <TodoItem />
        <button
          className="btn btn-danger btn-block text-capitalize mt-5"
          type="submit"
          placeholder="clear text"
        >
          Clear List
        </button>
      </ul>
    );
  }
}
export default TodoList;
