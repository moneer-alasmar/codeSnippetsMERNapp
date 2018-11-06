import React, { Component } from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getSnippets } from '../actions/SnippetActions';
import PropTypes from 'prop-types';

class SnippetList extends Component {
  componentDidMount() {
    this.props.getSnippets();
  }

  render() {
    const { snippets } = this.props.snippet;
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

SnippetList.propTypes = {
  getSnippets: PropTypes.func.isRequired,
  snippet: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  snippet: state.snippet
});

export default connect(mapStateToProps, { getSnippets })(SnippetList);