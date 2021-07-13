import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    console.log("COMPONENTE HIJO:::", this.props);
  }
  render() {
    const { task } = this.props;
    return (
      <div>
        {task.title} -{task.descripcion} -{task.done} -{task.id}
        <input type="checkbox" />
        <button>X</button>
      </div>
    );
  }
}
export default Task;