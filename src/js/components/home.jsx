import React from 'react';
import { Link } from 'react-router'; 

var Home = React.createClass({

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
})

export default Home;
