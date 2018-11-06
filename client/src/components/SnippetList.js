import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import uuid from 'uuid'; USED FOR TESTING
import { connect } from "react-redux";
import { getSnippets, deleteSnippet } from "../actions/SnippetActions";
import PropTypes from "prop-types";

class SnippetList extends Component {
  componentDidMount() {
    this.props.getSnippets();
  }

  onDeleteClick = id => {
    this.props.deleteSnippet(id);
  };

  render() {
    const { snippets } = this.props.snippet;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="snippet-list">
            {snippets.map(({ id, title, snippet }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn mr-2"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
                  >
                    &times;
                  </Button>
                  {title}, {snippet}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

SnippetList.propTypes = {
  getSnippets: PropTypes.func.isRequired,
  snippet: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  snippet: state.snippet
});

export default connect(
  mapStateToProps,
  { getSnippets, deleteSnippet }
)(SnippetList);
