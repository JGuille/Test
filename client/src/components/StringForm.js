import React, { Component } from 'react';
import { Form, FormGroup, Button, Card, CardTitle, CardBody } from 'reactstrap';

import StringInput from './StringInput';

class StringForm extends Component {
  render() {
    return (
      <div class="container h-100" style={{ paddingTop: '100px' }}>
        <div class="row h-100 justify-content-center align-items-center">
          <Card className="center">
            <CardTitle>Minusculas a Mayusculas | Helicon</CardTitle>
            <CardBody>
              <Form inline onSubmit={this.props.handleSubmit}>
                <FormGroup>
                  <StringInput
                    handleChange={this.props.handleChange}
                    inputString={this.props.inputString}
                  />
                </FormGroup>

                <Button
                  color="primary"
                  style={{
                    backgroundColor: 'black',
                    border: 'none',
                    textAlign: 'center'
                  }}
                >
                  MAYUS
                </Button>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default StringForm;
