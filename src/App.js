import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

import TodoInput from "./Components/TodoInput";
import MatrixBoard from "./Components/MatrixBoard";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editTodo: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      item: this.state.item
    };
    console.log(newItem);

    const updateItems = [...this.state.items, this.newItem];
    this.setState({
      items: updateItems,
      item: "",
      id: uuidv4(),
      editItem: false
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo List</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <MatrixBoard items={this.state.items} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
