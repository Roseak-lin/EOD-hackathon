import React from "react";
import $ from "jquery";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import C1 from "../Images/Chlorophyll/C_2020-1-1.png";
import C2 from "../Images/Chlorophyll/C_2020-4-1.png";
import C3 from "../Images/Chlorophyll/C_2020-7-1.png";
import C4 from "../Images/Chlorophyll/C_2020-10-7.png";
import C5 from "../Images/Chlorophyll/C_2021-1-6.png";

import T1 from "../Images/TotalSuspendedMatter/T_2020-1-1.png";
import T2 from "../Images/TotalSuspendedMatter/T_2020-4-1.png";
import T3 from "../Images/TotalSuspendedMatter/T_2020-7-1.png";
import T4 from "../Images/TotalSuspendedMatter/T_2020-10-7.png";
import T5 from "../Images/TotalSuspendedMatter/T_2021-1-6.png";

import Map from "./Map"

var active = 0;

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      foreground: C1,
      background: T1,
    }
  }

  componentDidMount() {
    for (let i = 0; i < 5; i++) {
      $(".date-btn")
        .eq(i)
        .on("click", () => {
          this.changeMap(i);
        });
    }
  }

  changeMap(index) {
    $(".date-btn").eq(active).attr("class", "date-btn");
    $(".date-btn").eq(index).attr("class", "date-btn selected");

    active = index;

    switch (index) {
      case 0:
        this.setState({ background: C1, foreground: T1 });
        break;
      case 1:
        this.setState({ background: C2, foreground: T2 });
        break;
      case 2:
        this.setState({ background: C3, foreground: T3 });
        break;
      case 3:
        this.setState({ background: C4, foreground: T4 });
        break;
      case 4:
        this.setState({ background: C5, foreground: T5 });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        <div className="header">New York</div>

        <Row>
          <Col xs={3} id="left">
            <div className="date-btn selected">2020-01-01</div>

            <div className="date-btn">2020-04-01</div>

            <div className="date-btn">2020-07-01</div>

            <div className="date-btn">2020-10-07</div>

            <div className="date-btn">2021-01-06</div>
          </Col>

          <Col id="right">
            <Map
              background={this.state.background}
              foreground={this.state.foreground}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
