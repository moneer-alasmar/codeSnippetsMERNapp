import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    snippets: [
      { id: uuid(), title: 'JavaScript', snippet: 'console.log(123)'},
      { id: uuid(), title: 'JavaScript ES6', snippet: 'console.log(456)'},
      { id: uuid(), title: 'JavaScript React', snippet: 'console.log(789)'},
      { id: uuid(), title: 'JavaScript Angular', snippet: 'console.log(111)'},
      { id: uuid(), title: 'JavaScript Vue', snippet: 'console.log(222)'},
    ]
  }

  render() {
    const { snippets } = this.state;
    return (
      <Container>
        <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onClick={() => {
          const title = prompt('Enter Title');
          const snippet = prompt('Enter Code');
          if(title && snippet) {
            this.setState(state => ({
              snippets: [...state.snippets, { id: uuid(), title, snippet }]
            }));
          }
        }}
        >Add Item</Button>
        <ListGroup>
          <TransitionGroup className="snippet-list">
            {snippets.map(({id, title, snippet}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn mr-2"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        snippets: state.snippets.filter(snippet => snippet.id !== id)
                      }));
                    }}
                  >&times;</Button>
                   {title}, {snippet}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

export default ShoppingList;