import React, {Component} from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

class UncertainityFactors extends Component {

  onSubmitForm = (e) => {
    var formData = new URLSearchParams();
    for (let key in this.state) {
      formData.append(key, this.state[key]);
    }

    // Call API to save Data.
    // fetch("/api/rates", {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //   },
    //   body: formData
    // })
  };

  updateValue = (field, e) => {
    if (e.target.value !== '') {
      var data = {};
      data[field] = e.target.value;
      this.setState(data);
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <Form onSubmit={this.onSubmitForm}>
                <CardHeader>
                  <strong>Uncertainity Factors</strong>
                  <small>Global</small>
                </CardHeader>
                <CardBody>
                  <FormGroup>
                    <Label htmlFor="title">Factor Title</Label>
                    <Input required onChange={this.updateValue.bind(this, 'title')} type="text" id="title" placeholder="Enter Factor Title (E.g. Scope is vague)"/>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="points">Factor Points</Label>
                        <Input required onChange={this.updateValue.bind(this, 'points')} type="text" id="points" placeholder="Enter Factor Points (E.g. 1 or 4)"/>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="lower_multiplier">Lower Multiplier: (in USD)</Label>
                        <Input required onChange={this.updateValue.bind(this, 'lower_multiplier')} type="text" id="lower_multiplier" placeholder="Enter Lower estimate multiplier (E.g. 1 or 1.3)"/>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <h3>Uncertainity Factors will come here</h3>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UncertainityFactors;