import React from "react";
import $ from "jquery";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import C1 from "../Images/Chlorophyll/Ch_2020-1-1.png";
import C2 from "../Images/Chlorophyll/Ch_2020-4-1.png";
import C3 from "../Images/Chlorophyll/Ch_2020-7-1.png";

import T1 from "../Images/TotalSuspendedMatter/Ts_2020-1-1.png";
import T2 from "../Images/TotalSuspendedMatter/Ts_2020-4-1.png";
import T3 from "../Images/TotalSuspendedMatter/Ts_2020-7-1.png";

import N1 from "../Images/Nitrogen/Ni_2020-1-1.png";
import N2 from "../Images/Nitrogen/Ni_2020-4-1.png";
import N3 from "../Images/Nitrogen/Ni_2020-7-1.png";

import CO1 from "../Images/Carbon Monoxide/Co_2020-1-1.png";
import CO2 from "../Images/Carbon Monoxide/Co_2020-4-1.png";
import CO3 from "../Images/Carbon Monoxide/Co_2020-7-1.png";

import Map from "./Map";

var active = 0;

const Ch1 = C1;
const Ch2 = C2;
const Ch3 = C3;

const Ts1 = T1;
const Ts2 = T2;
const Ts3 = T3;

const Ni1 = N1;
const Ni2 = N2;
const Ni3 = N3;

const Co1 = CO1;
const Co2 = CO2;
const Co3 = CO3;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foreground: Ts1,
      background: Ni1,
      i1: "Total Suspended Matter",
      i2: "NO2",
      scale_1:
        "https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral_tsm.png",
      scale_2: "https://maps.s5p-pal.com/static/images/colorbartropno2.svg",
    };

    this.changeIndicator = this.changeIndicator.bind(this);
  }

  componentDidMount() {
    for (let i = 0; i < 3; i++) {
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

    let foreground = this.state.foreground.substr(28, 2);
    let background = this.state.background.substr(28, 2);
    console.log(foreground + " | " + background);
    switch (index) {
      case 0:
        this.setState({
          background: eval(background + "1"),
          foreground: eval(foreground + "1"),
        });
        break;
      case 1:
        this.setState({
          background: eval(background + "2"),
          foreground: eval(foreground + "2"),
        });
        break;
      case 2:
        this.setState({
          background: eval(background + "3"),
          foreground: eval(foreground + "3"),
        });
        break;
      default:
        break;
    }
  }

  changeIndicator(key) {
    const stringKey = String(key);
    if (stringKey.endsWith("1")) {
      if (stringKey.startsWith("a")) {
        this.setState({
          i1: "Total Suspended Matter",
          foreground: eval("Ts" + (active + 1)),
          scale_1:
            "https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral_tsm.png",
        });
      } else {
        this.setState({
          i1: "Chlorophyll-a concentration",
          foreground: eval("Ch" + (active + 1)),
          scale_1:
            "https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral.png",
        });
      }
    } else {
      if (stringKey.startsWith("a")) {
        this.setState({
          i2: "NO2",
          background: eval("Ni" + (active + 1)),
          scale_2: "https://maps.s5p-pal.com/static/images/colorbartropno2.svg",
        });
      } else {
        this.setState({
          i2: "Carbon Monoxide Concentration",
          background: eval("Co" + (active + 1)),
          scale_2: "https://maps.s5p-pal.com/static/images/colorbarco.svg",
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div className="header">New York, USA</div>

        <Row>
          <Col xs={3} id="left">
            <div className="date-btn selected">2020-01-01</div>

            <div className="date-btn">2020-04-01</div>

            <div className="date-btn">2020-07-01</div>
          </Col>

          <Col id="right">
            <Map
              background={this.state.background}
              foreground={this.state.foreground}
              changeIndicator={this.changeIndicator}
              i1={this.state.i1}
              i2={this.state.i2}
              scale_1={this.state.scale_1}
              scale_2={this.state.scale_2}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
