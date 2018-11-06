import React, { Component } from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import uuid from 'uuid'; USED FOR TESTING
import { connect } from "react-redux";
import { getSnippets, deleteSnippet } from "../actions/SnippetActions";
import PropTypes from "prop-types";

class SnippetList extends Component {
  componentDidMount() {
    this.props.getSnippets();
  }

  onDeleteClick = _id => {
    this.props.deleteSnippet(_id);
  };

  render() {
    const { snippets } = this.props.snippet;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="snippet-list">
            {snippets.map(({ _id, title, snippet, date }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Row>
                    <Col>
                      <Button
                        className="remove-btn mr-2 float-right"
                        color="danger"
                        size="sm"
                        onClick={this.onDeleteClick.bind(this, _id)}
                      >
                        &times;
                      </Button>
                      <h5>Title: {title}</h5>

                      <h5>Code: </h5>
                      <code>{snippet}</code>
                      <p className="float-right">{date}</p>
                    </Col>
                  </Row>
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
