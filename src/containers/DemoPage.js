import React from "react";
import ReactBodymovin from "react-bodymovin/lib/ReactBodymovinFull";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Input,
  CustomInput
} from "reactstrap";
import requestAnimation from "../assets/json/weopt_request_anim.json";

export class DemoPage extends React.Component {
  render() {
    // Request animation
    const requestmovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: requestAnimation
    };
    return (
      <>
        <section className="section-demo-banner">
          <Container fluid>
            <Row>
              <Col md={{ size: "9", offset: 2 }}>
                <div className="content-wrap">
                  <div className="box-content">
                    <h3 className="text-uppercase">Request a demo</h3>
                    <p>Let us show you around</p>
                  </div>
                  <div className="box-animation">
                    <ReactBodymovin options={requestmovinOptions} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-demo-form">
          <Card body className="card-form">
            <CardTitle tag="h3">Request a demo</CardTitle>
            <CardText>
              Fill out the form and we will contact you in less than 24 hours to
              schedule a short call.
            </CardText>
            <Form className="form-demo-request">
              <FormGroup>
                <Input
                  type="text"
                  name="first_name"
                  id="firstName"
                  placeholder="First name"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="last_name"
                  id="lastName"
                  placeholder="Last name"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  name="work_email"
                  id="workEmail"
                  placeholder="Work Email"
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="number"
                  name="phone_number"
                  id="phoneNumber"
                  placeholder="Phone (Optional)"
                />
              </FormGroup>
              <FormGroup className="radio-group">
                <CustomInput
                  type="radio"
                  id="userType"
                  name="user"
                  label="Advertiser"
                />
                <CustomInput
                  type="radio"
                  id="userType2"
                  name="user"
                  label="Publisher"
                />
              </FormGroup>
              <FormGroup className="text-center">
                <button className="btn btn-demo rounded-pill">
                  Request a demo
                </button>
              </FormGroup>
            </Form>
          </Card>
        </section>
      </>
    );
  }
}
