import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Div = styled.div`
  width: 50%;
  margin: 0 auto;
  display: block;
`;

const TodoList = (props) => {

  const todos = props?.todos;

  console.log(todos, 'er');

  const handleCheck = (todo) => {
    props.onListItemClicked(todo);
  }

  const handleClick = (todo) => {
    props.onListItemClicked(todo);
  }

    const show = props.todos.length === 0 ? 'inVis' : '';
    return (
      <Div visible={props.todos.length === 0 ? 'none' : 'block'}>
        <Paper zDepth={2} rounded={false}>
          <List>
            { todos && todos.todoText !== "" ? (todos.map(todo => {
              console.log(todo, 'todo');
              return (
                <ListItem
                  key={todo.id}
                  primaryText={todo.todoText}
                  leftCheckbox={
                    <Checkbox
                      checked={todo.completed}
                      onCheck={e => handleCheck(todo, e)}
                    />
                  }
                  innerDivStyle={{
                    textAlign: 'left',
                    textDecoration: todo.completed ? 'line-through' : '',
                    color: todo.completed ? 'red' : 'inherit',
                  }}
                />
              );
            })
            ): ('')}
          </List>
        </Paper>
      </Div>
    );
  }

export default TodoList;
