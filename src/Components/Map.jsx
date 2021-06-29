import React, { useState } from "react";
import $ from "jquery";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ButtonToolbar from "react-bootstrap/ButtonToolbar"

export default class Map extends React.Component {
  componentDidMount() {
    $(".slider").on("mousemove", function (e) {
      const position =
        (e.target.value / 100) * 1168 -
        2 -
        ((e.target.value / 100) * 1168 - 584) / 584 -
        (((e.target.value / 100) * 1168 - 584) / 584) * 10;

      $(".foreground-img").css("width", `${position}px`);

      $("#break").css("left", `${position}px`);
    });

    $(".foreground-img").css(
      "left",
      `calc(50% - ${parseInt($(".background-img").css("width")) / 2}px)`
    );
  }

  render() {
    const { foreground, background, i1, i2, changeIndicator, scale_1, scale_2 } = this.props;

    return (
      <div>
        <ButtonToolbar className="justify-content-between">
          <ButtonGroup>
            <DropdownButton
              title={i1}
              id="indicator-1"
              variant="outline-dark"
              onSelect={(key) => {
                changeIndicator(key);
              }}
            >
              <Dropdown.Item eventKey="a1">Total Suspended Matter</Dropdown.Item>
              <Dropdown.Item eventKey="b1">Chlorophyll-a concentration</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>

          <ButtonGroup>
            <DropdownButton
              title={i2}
              id="indicator-2"
              variant="outline-dark"
              onSelect={(key) => {
                changeIndicator(key);
              }}
            >
              <Dropdown.Item eventKey="a2">NO2</Dropdown.Item>
              <Dropdown.Item eventKey="b2">Carbon Monoxide Concentration</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </ButtonToolbar>

        <img
          id="legend_1"
          src={`${scale_1}`}
          alt="img1"
        />
        <img
          id="legend_2"
          src={`${scale_2}`}
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