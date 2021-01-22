import React, { useState } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TodoList from './TodoList';

const style = {
  margin: 12,
};

const TodoForm = props => {
  const [todoText, setTodoText] = useState();
  const [todos, setTodos] = useState([{todoText: "Red Chair", id: 1, completed: false}, {todoText: "Bucket", id: 2, completed: false}]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTodos(...todos,
      {
        todoText: todos.todoText,
        id: todos.length + 1,
        completed: false,
      }
    );

    clearTodoText();
  }

  const clearTodoText = () => {
    setTodoText('');
  }

  const handleChange = (event) => {
    setTodoText();
  }

  const handleListItemClicked = (todo) => {
    console.log(todo, 'handleListItemCLicked');
    let todosInState = todos;
    let todoIndex = todo.id - 1;
    console.log(todoIndex);

    if (todosInState.indexOf(todo) !== -1) {
      let todoState = todosInState[todoIndex];
      todoState.completed = !todo.completed;

      todosInState[todoIndex] = todoState;
      console.log(todosInState, 'hree');

      setTodos( todosInState );
    }
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          {/* <TextField
            id="txttodoText"
            hintText="Enter a todo"
            floatingLabelText="Enter a todo"
            value={todo.todoText}
            onChange={handleChange}
          />
          <RaisedButton
            label="Submit"
            primary={true}
            style={style}
            onClick={handleSubmit}
          /> */}
        </form>
        <TodoList
          todos={todos}
          onListItemClicked={handleListItemClicked}
        />
      </div>
    );
  }

export default TodoForm;
