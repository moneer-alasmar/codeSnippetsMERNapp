import React, { Component } from 'react';
// Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavbar';
import './App.css';
import SnippetList from './components/SnippetList';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar />
          <SnippetList />
        </div>
      </Provider>
    );
  }
}

export default App;
