import React, { Component, Fragment } from 'react';
import { Input } from 'reactstrap';

class StringInput extends Component {
  render() {
    return (
      <Fragment>
        <Input
          onChange={this.props.handleChange}
          value={this.props.inputString}
          type="text"
          name="inputString"
          id="inputString"
          textAlign="center"
        />
      </Fragment>
    );
  }
}

export default StringInput;
