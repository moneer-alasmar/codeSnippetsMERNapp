import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addSnippet } from "../actions/SnippetActions";

class SnippetModal extends Component {
  state = {
    modal: false,
    title: "",
    snippet: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newSnippet = {
      title: this.state.title,
      snippet: this.state.snippet
    };

    // Add snippet via addSnippet action
    this.props.addSnippet(newSnippet);

    // Close Modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Snippet List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Add Title For Snippet"
                  onChange={this.onChange}
                />
                <Label for="snippet">Snippet</Label>
                <Input
                  type="text"
                  name="snippet"
                  id="snippet"
                  placeholder="Enter Code"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add Snippet
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  snippet: state.snippet
});

export default connect(
  mapStateToProps,
  { addSnippet }
)(SnippetModal);
