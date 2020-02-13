import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: ""
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
      tasks:[...this.state.tasks, newTask]
    });

    //Toggle Completed Feature


    //Clear completed Feature
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
