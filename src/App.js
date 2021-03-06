import "./App.scss";
import { Component } from "react";

import Task from "./components/Task/Task";
import editIcon from "./assets/icons/Edit.png";
import Footer from "./components/Footer/Footer";
import Button from './components/UI/Button/Button';

class App extends Component {
  state = {
    tasks: [],
    edit: false,
  };

  addTaskHandler = (e, taskName, completed) => {
    e.preventDefault();
    let newTasks = [...this.state.tasks];
    newTasks.push({ taskName: taskName, completed: completed, edit: false });
    this.setState({ tasks: newTasks });
  };

  toggleEditHandler = () => {
    this.setState({ edit: !this.state.edit });
  };

  toggleCompleteHandler = (index) => {
    let newTasks = [...this.state.tasks];
    newTasks[index].completed = !newTasks[index].completed;
    this.setState({ tasks: newTasks });
  };

  deleteTaskHandler = (index) => {
    let newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    let newEdit = this.state.edit;
    if (newTasks.length === 0) {
      newEdit = !newEdit;
    }
    this.setState({ tasks: newTasks, edit: newEdit });
  };

  render() {
    let tasks = this.state.tasks
      // .sort((a, b) =>
      //   a.completed > b.completed ? 1 : b.completed > a.completed ? -1 : 0
      // )
      .map((task, index) => {
        return (
          <Task
            key={index}
            taskName={task.taskName}
            toggleCompleteHandler={() => this.toggleCompleteHandler(index)}
            completed={task.completed}
            taskType={this.state.edit ? "EDIT_TASK" : "TASK"}
            deleteHandler={() => this.deleteTaskHandler(index)}
          />
        );
      });
    return (
      <div className="App">
        <div className="Content">
          <div className="Header">
            <p className="HeaderText">Tasks:</p>
            {tasks.length > 0 ? (
              this.state.edit ? <Button clickHandler={this.toggleEditHandler}/> :
              <img
                alt="edit icon"
                className="EditIcon"
                src={editIcon}
                onClick={this.toggleEditHandler}
              />
            ) : null}
          </div>
          <Task taskType="ADD_TASK" submitHandler={this.addTaskHandler} />
          <div className="TaskContainer">
          {tasks}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
