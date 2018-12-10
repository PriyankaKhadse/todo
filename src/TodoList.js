import React from "react";
// import 'semantic-ui-css/semantic.min.css';
// import { Button } from 'semantic-ui-react'

class TodoList extends React.Component {
  state = {
    task: "",
    items: [{ task: "clean room" }]
  };

  addTask = e => {
    e.preventDefault();
    const { task } = this.state;
    const newItems = [...this.state.items, { task }];
    this.setState({ items: newItems, task: "" });
  };
  removeTask = index => {
    console.log(index);
    const items = this.state.items;
    items.splice(index, 1);
    this.setState({ items });
  };
  updateTask = index => {
    const newItems = this.state.items.map((item, i) => {
      if (index === i) {
        return { task: this.state.task };
      }
      return item;
    });
    this.setState({ items: newItems, task: "" });
  };

  render() {
    const { items, task } = this.state;
    return (
      <div className="bg">
        <h1>Task Details</h1>

        <form className="header">
          <input
            type="text"
            value={task}
            placeholder="enter the task"
            onChange={e => {
              this.setState({ task: e.target.value });
            }}
          />
          <button onClick={this.addTask}>Add Task</button>
          <br />
        </form>

        <div>
          <ul>
            {items.map((item, index) => {
              return (
                <li>
                  {index + 1} {item.task}
                  <button onClick={() => this.removeTask(index)}>remove</button>
                  <button onClick={() => this.updateTask(index)}>update</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default TodoList;
