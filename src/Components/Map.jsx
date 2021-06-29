import React from "react";
import $ from "jquery";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"

export default class Map extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      i1: "Total Suspended Matter",
      i2: "Chlorophyll-a concentration"
    }
  }

  componentDidMount() {
    $(".slider").on("mousemove", function (e) {
      const position =
        (e.target.value / 100) * 1168 -
        2 -
        ((e.target.value / 100) * 1168 - 584) / 584 -
        (((e.target.value / 100) * 1168 - 584) / 584) * 10;

      $(".foreground-img").css("width", `${position}px`);

      $("#break").css("left", `${position}px`);
      console.log(`${position}px`);
    });

    $(".foreground-img").css(
      "left",
      `calc(50% - ${parseInt($(".background-img").css("width")) / 2}px)`
    );
  }

  render() {
    const { foreground, background } = this.props;

    return (
      <div>
        <ButtonToolbar className="justify-content-between">
          <ButtonGroup>
            <DropdownButton
              title={this.state.i1}
              id="indicator-1"
              variant="light"
            >
              <Dropdown.Item eventKey="a1">A</Dropdown.Item>
              <Dropdown.Item eventKey="b1">B</Dropdown.Item>
              <Dropdown.Item eventKey="c1">C</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>

          <ButtonGroup>
            <DropdownButton
              title={this.state.i2}
              id="indicator-2"
              variant="light"
            >
              <Dropdown.Item eventKey="a2">A</Dropdown.Item>
              <Dropdown.Item eventKey="b2">B</Dropdown.Item>
              <Dropdown.Item eventKey="c2">C</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </ButtonToolbar>

        <img
          id="legend_1"
          src="https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral_tsm.png"
          alt="img1"
        />
        <img
          id="legend_2"
          src="https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral.png"
          alt="img2"
        />

        <div
          className="background-img"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Form.Control className="slider" type="range" />
        </div>

        <div
          className="foreground-img"
          style={{ backgroundImage: `url(${foreground})` }}
        >
          <div id="break" />
        </div>
      </div>
    );
  }
}