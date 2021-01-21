import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TodoList from './TodoList';

const style = {
  margin: 12,
};

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: '',
      todos: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleListItemClicked = this.handleListItemClicked.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          todoText: this.state.todoText,
          id: this.state.todos.length + 1,
          completed: false,
        },
      ],
    });

    this.clearTodoText();
  }

  clearTodoText() {
    this.setState({ todoText: '' });
  }

  handleChange(event) {
    this.setState({ todoText: event.target.value });
  }

  handleListItemClicked(todo) {
    let todosInState = this.state.todos;
    let todoIndex = todo.id - 1;

    if (todosInState.indexOf(todo) !== -1) {
      let todoState = todosInState[todoIndex];
      todoState.completed = !todo.completed;

      todosInState[todoIndex] = todoState;

      this.setState({ todos: todosInState });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="txttodoText"
            hintText="Enter a todo"
            floatingLabelText="Enter a todo"
            value={this.state.todoText}
            onChange={this.handleChange}
          />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={this.handleSubmit}
          />
        </form>
        <TodoList
          todos={this.state.todos}
          onListItemClicked={this.handleListItemClicked}
        />
      </div>
    );
  }
}

export default TodoForm;
