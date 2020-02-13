import React from "react";

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
        console.log(this.props)
    };

    render() {

        return (
            <form onSubmit={this.submitItem}>
                <input type='text' name='task' onChange={this.handleChanges} />
                <button>Add ToDo</button>
            </form>
        );
    }
}

export default TodoForm;