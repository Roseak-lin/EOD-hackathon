import React from "react";
import $ from "jquery"

export default class Map extends React.Component {

  componentDidMount() {
    const slider = $(".slider")

    slider.on("mousemove", function (e) {
      const beforeImage = document.querySelector(".foreground-img");
      beforeImage.style.width = `${(e.target.value / 100) * 1168}px`;

      $("#break").css("left", `${(e.target.value / 100) * 1168}px`);

    });

    $(".foreground-img").css("left", `calc(50% - ${parseInt($(".background-img").css("width")) / 2}px)`)
    console.log(`${$("#right").css("width")}`);
  }

  render() {
    const {foreground, background} = this.props;

    return (
      <div>
        <img
          id="legend_1"
          src="https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral_tsm.png"
        />
        <img
          id="legend_2"
          src="https://eodashboard.org/data/trilateral/WaterQuality_legend_trilateral.png"
        />
        <div
          className="background-img"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div id="break" />
        </div>
        <div
          className="foreground-img"
          style={{ backgroundImage: `url(${foreground})` }}
        />
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="50"
          className="slider"
        />
      </div>
    );
  }
}