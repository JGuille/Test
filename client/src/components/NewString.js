import React, { Component } from 'react';
import { Container } from 'reactstrap';

class NewString extends Component {
  render() {
    return (
      <Container>
        <h1 className="display-7 center">{this.props.resultString}</h1>
      </Container>
    );
  }
}

export default NewString;
