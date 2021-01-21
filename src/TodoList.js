import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Div = styled.div`
  width: 50%;
  margin: 0 auto;
  display: ${props => props.visible};
`;

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck(todo, event) {
    this.props.onListItemClicked(todo);
  }

  handleClick(todo, event) {
    this.props.onListItemClicked(todo);
  }

  render() {
    const show = this.props.todos.length === 0 ? 'inVis' : '';
    return (
      <Div visible={this.props.todos.length === 0 ? 'none' : 'block'}>
        <Paper zDepth={2} rounded={false}>
          <List>
            {this.props.todos.map(todo => {
              return (
                <ListItem
                  key={todo.id}
                  primaryText={todo.todoText}
                  leftCheckbox={
                    <Checkbox
                      checked={todo.completed}
                      onCheck={e => this.handleCheck(todo, e)}
                    />
                  }
                  innerDivStyle={{
                    textAlign: 'left',
                    textDecoration: todo.completed ? 'line-through' : '',
                    color: todo.completed ? 'red' : 'inherit',
                  }}
                />
              );
            })}
          </List>
        </Paper>
      </Div>
    );
  }
}

export default TodoList;
