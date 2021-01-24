import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Div = styled.div`
  width: 90%;
  margin: 0 auto;
  display: block;
`;

const TodoList = (props) => {

  const todos = props.todos;

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
            {todos != "" && todos.todoText !== "" ? (todos.map(todo => {
              console.log(todo, 'todo');
              return (
                <ListItem
                  key={todo.id}
                  primaryText={todo.todoText}
                  innerDivStyle={{
                    textAlign: 'left',
                    textDecoration: todo.completed ? 'line-through' : '',
                    color: todo.completed ? 'red' : 'inherit',
                    fontSize: '1.2vw',
                    lineHeight: '3vh',
                    wordSpacing: '100vw',
                    padding: '16px 16px 16px 45px',
                    width: '100%',
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
