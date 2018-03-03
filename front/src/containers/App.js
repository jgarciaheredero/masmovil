import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';
import '../scss/main.scss'

class App extends Component {
  render() {
    const { error, children } = this.props;
    return (
      <div>
        <AppBar 
            title="Phone Catalog App"
        />
        { children }
      </div>  
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
}

export default App;
