import React from "react";
import ReactBodymovin from "react-bodymovin/lib/ReactBodymovinFull";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  Table,
  CardImg
} from "reactstrap";
import headerAnimation from "../assets/json/weopt_main_anim.json";
import storageAnimation from "../assets/json/weopt_Icon_1.json";
import distributionAnimation from "../assets/json/weopt_Icon_2.json";
import workflowsAnimation from "../assets/json/weopt_Icon_3.json";
import monitoringAnimation from "../assets/json/weopt_Icon_4.json";
import networkAnimation from "../assets/json/weopt_net_anim.json";
import questionAnimation from "../assets/json/weopt_questions_anim.json";
import svgClick from "../assets/images/clicking.svg";
import svgKey from "../assets/images/key.svg";
import svgSendMail from "../assets/images/send-mail.svg";
import waysAnimation from "../assets/json/weopt_ways_anim.json";
import imgStandart from "../assets/images/standard.png";
import imgPremium from "../assets/images/premium.png";
import imgPremium_plus from "../assets/images/premium_plus.png";

export class LandingPage extends React.Component {
  render() {
    // Header animation
    const headermovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: headerAnimation
    };

    // Suppresson Storage animation
    const storagemovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: storageAnimation
    };

    // Source Distribution animation
    const distributionmovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: distributionAnimation
    };

    // Automated Workflows animation
    const workflowsmovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: workflowsAnimation
    };

    // Partner Monitoring animation
    const monitoringmovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: monitoringAnimation
    };

    // Network animation
    const networkmovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: networkAnimation
    };

    // Ways animation
    const waysmovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: waysAnimation
    };

    // Ways animation
    const questionmovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: questionAnimation
    };

    return (
      <>
        <section className="section-demo">
          <Container fluid>
            <Row>
              <Col md={{ size: "9", offset: 2 }}>
                <div className="box-content">
                  <h3>We manage optouts for advertisers and publishers.</h3>
                  <p>Always stay compliant with WeOpt</p>
                  <button className="btn btn-demo rounded-pill">
                    Request a demo
                  </button>
                </div>
              </Col>
            </Row>
            <div className="box-animation">
              <ReactBodymovin options={headermovinOptions} />
            </div>
          </Container>
        </section>
        <section className="section-info section-about">
          <Container fluid>
            <Row>
              <Col md={{ size: "10", offset: 1 }}>
                <h4 className="section-title">What we do</h4>
                <Row>
                  <Col>
                    <Card body className="card-about h-100">
                      <div className="box-animation">
                        <ReactBodymovin options={storagemovinOptions} />
                      </div>
                      <CardTitle>Suppresson Storage</CardTitle>
                      <CardText>We keep your data safe at all time.</CardText>
                    </Card>
                  </Col>
                  <Col>
                    <Card body className="card-about h-100">
                      <div className="box-animation">
                        <ReactBodymovin options={distributionmovinOptions} />
                      </div>
                      <CardTitle>Source Distribution</CardTitle>
                      <CardText>
                        Share your sources with individual email partners
                      </CardText>
                    </Card>
                  </Col>
                  <Col>
                    <Card body className="card-about h-100">
                      <div className="box-animation">
                        <ReactBodymovin options={workflowsmovinOptions} />
                      </div>
                      <CardTitle>Automated Workflows</CardTitle>
                      <CardText>
                        Our intelligent system doesn’t need any maintenance.
                      </CardText>
                    </Card>
                  </Col>
                  <Col>
                    <Card body className="card-about h-100">
                      <div className="box-animation">
                        <ReactBodymovin options={monitoringmovinOptions} />
                      </div>
                      <CardTitle>Partner Monitoring</CardTitle>
                      <CardText>
                        Track compliance performances. We trust in transparency
                      </CardText>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-info section-steps">
          <Container fluid>
            <Row>
              <Col md={{ size: "10", offset: 1 }}>
                <h4 className="section-title">How it works</h4>
                <ul className="list-steps">
                  <li className="align-left">
                    <div className="bullet">
                      <img src={svgClick} alt="Connect with one click" />
                    </div>
                    <div className="info">
                      <h5>Connect with one click</h5>
                      <p>Integrate your ESP or Network in seconds.</p>
                    </div>
                  </li>
                  <li className="align-right">
                    <div className="bullet">
                      <img src={svgKey} alt="Share your sources" />
                    </div>
                    <div className="info">
                      <h5>Share your sources</h5>
                      <p>
                        Easily create automated keys for individual access for
                        your email partners.
                      </p>
                    </div>
                  </li>
                  <li className="align-left">
                    <div className="bullet">
                      <img
                        src={svgSendMail}
                        alt="Analyze Performance"
                        className="img-mail"
                      />
                    </div>
                    <div className="info">
                      <h5>Analyze Performance</h5>
                      <p>
                        Keep track of your email partners and set alerts to stay
                        up to date
                      </p>
                    </div>
                  </li>
                </ul>
              </Col>
            </Row>
            <div className="box-animation">
              <ReactBodymovin options={networkmovinOptions} />
            </div>
          </Container>
        </section>
        <section className="section-learn-more">
          <Container fluid>
            <Row>
              <Col md={{ size: "8", offset: 2 }}>
                <div className="box-content">
                  <h3>Do you want to learn more?</h3>
                  <button className="btn btn-demo rounded-pill">
                    Request a demo
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-info section-ways">
          <Container fluid>
            <Row>
              <Col md={{ size: "10", offset: 1 }}>
                <div className="box-animation">
                  <ReactBodymovin options={waysmovinOptions} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-info section-options">
          <Container fluid>
            <Row>
              <Col md={{ size: "10", offset: 1 }}>
                <h4 className="section-title">Why us</h4>
                <div className="table-responsive">
                  <Table className="table-features">
                    <colgroup>
                      <col />
                      <col width="18%" />
                      <col width="18%" />
                      <col width="18%" />
                    </colgroup>
                    <thead>
                      <tr>
                        <th className="text-left"></th>
                        <th>OPTIZMO</th>
                        <th>UNSUB CENTRAL</th>
                        <th className="text-primary">WEOPT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left">SHA512</td>
                        <td className="text-uncheck">X</td>
                        <td className="text-uncheck">X</td>
                        <td className="text-check">√</td>
                      </tr>
                      <tr>
                        <td className="text-left">DIRECT DOWNLOAD</td>
                        <td className="text-uncheck">X</td>
                        <td className="text-uncheck">X</td>
                        <td className="text-check">√</td>
                      </tr>
                      <tr>
                        <td className="text-left">EASY INTEGRATION</td>
                        <td className="text-uncheck">X</td>
                        <td className="text-uncheck">X</td>
                        <td className="text-check">√</td>
                      </tr>
                      <tr>
                        <td className="text-left">CCPA CONFORM</td>
                        <td className="text-uncheck">X</td>
                        <td className="text-uncheck">X</td>
                        <td className="text-check">√</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-info section-products">
          <Container fluid>
            <Row>
              <Col md={{ size: "10", offset: 1 }}>
                <h4 className="section-title">Our products</h4>
                <Row>
                  <Col>
                    <Card body className="card-product h-100">
                      <CardImg top src={imgStandart} alt="Standart" />
                      <CardTitle>Standart</CardTitle>
                      <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus
                      </CardText>
                    </Card>
                  </Col>
                  <Col>
                    <Card body className="card-product h-100">
                      <CardImg top src={imgPremium} alt="Premium" />
                      <CardTitle>Premium</CardTitle>
                      <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet luctus venenatis, lectus
                        magna fringilla
                      </CardText>
                    </Card>
                  </Col>
                  <Col>
                    <Card body className="card-product h-100">
                      <CardImg top src={imgPremium_plus} alt="Premium+" />
                      <CardTitle>Premium+</CardTitle>
                      <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam, purus sit amet.
                      </CardText>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section-info section-question">
          <Container fluid>
            <Row>
              <Col md={{ size: "8", offset: 2 }}>
                <div className="content-wrap">
                  <div className="box-content">
                    <h4>Do you have any questions?</h4>
                    <p>
                      In a short demo we can discuss how WeOpt could fit your
                      needs. Our Account Manager will contact you as soon as
                      possible.
                    </p>
                    <button className="btn btn-demo rounded-pill">
                      Request a demo
                    </button>
                  </div>
                  <div className="box-animation">
                    <ReactBodymovin options={questionmovinOptions} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
