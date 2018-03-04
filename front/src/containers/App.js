import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';
import '../scss/main.scss'

class App extends Component {
  
  //Render container that includes the application
  render() {
    const { children } = this.props;
    return (
      <div>
        <AppBar 
            title="Phone Catalog App"
        />
        { children }
      </div>  
    )
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
}

export default App;
