import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Div = styled.div`
  width: 90%;
  margin: 0 auto;
  display: block;
  h2 {padding-bottom: 15px}
`;

const Mylist = styled(List)({ padding: '0px' });


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
          <List style={{padding: '8px 0px 0px 0px'}}>
            <h2>CLUES</h2>
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
                    lineHeight: '4vh',
                    wordSpacing: todo.wordSpacing,
                    padding: '16px 0px 10px 20px',
                    width: '70%',
                    borderTop: '1px solid #000',
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
