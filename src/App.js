import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const tasks = [
  {
    name: "Wash Clothes",
    id: 123,
    completed: false
  },
  {
    name: "Pay Bills",
    id: 124,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    };


    //Add task Feature
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  //Toggle Completed Feature
  toggleItem = taskId => {
    console.log(taskId);

    this.setState({
      tasks: this.state.tasks.map(task => {
        console.log(task);
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }


        return task;
      })
    })
  };


  //Clear completed Feature
  render() {
    return (
      <div>
        <div className="header">
          <h1>Add your ToDos!</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
