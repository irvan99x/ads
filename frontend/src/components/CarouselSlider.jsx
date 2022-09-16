import React from "react";
// Images 16pcs
import item1 from "../assets/images/2-16.jpg";
import item2 from "../assets/images/3-16.jpg";
import item3 from "../assets/images/4-16.jpg";
import item4 from "../assets/images/5-16.jpg";
import item5 from "../assets/images/6-16.jpg";

// Images 46pcs
import item6 from "../assets/images/2-46.png";
import item7 from "../assets/images/3-46.png";
import item8 from "../assets/images/4-46.jpg";
import item9 from "../assets/images/5-46.jpg";
import item10 from "../assets/images/6-46.jpg";

function CarouselSlider() {
  return (
    <>
      {/* Top */}
      <div className="carousel-wrapper">
        <span id="item-1" />
        <span id="item-2" />
        <span id="item-3" />
        <span id="item-4" />
        <span id="item-5" />
        <div
          className="carousel-item item-1"
          style={{ backgroundImage: `url(${item1})` }}
        >
          <h2>16PCS</h2>
          <a href="#item-5" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-2" className="arrow-next arrow">
            {" "}
          </a>
        </div>

        <div
          className="carousel-item item-2"
          style={{ backgroundImage: `url(${item2})` }}
        >
          <h2>16PCS</h2>
          <a href="#item-1" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-3" className="arrow-next arrow">
            {" "}
          </a>
        </div>

        <div
          className="carousel-item item-3"
          style={{ backgroundImage: `url(${item3})` }}
        >
          <h2>16PCS</h2>
          <a href="#item-2" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-4" className="arrow-next arrow">
            {" "}
          </a>
        </div>
        <div
          className="carousel-item item-4"
          style={{ backgroundImage: `url(${item4})` }}
        >
          <h2>16PCS</h2>
          <a href="#item-3" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-5" className="arrow-next arrow">
            {" "}
          </a>
        </div>
        <div
          className="carousel-item item-5"
          style={{ backgroundImage: `url(${item5})` }}
        >
          <h2>16PCS</h2>
          <a href="#item-4" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-1" className="arrow-next arrow">
            {" "}
          </a>
        </div>
      </div>
      {/* Bottom */}
      <div className="carousel-wrapper">
        <span id="item-6" />
        <span id="item-7" />
        <span id="item-8" />
        <span id="item-9" />
        <span id="item-10" />
        <div
          className="carousel-item item-1"
          style={{ backgroundImage: `url(${item6})` }}
        >
          <h2>46PCS</h2>
          <a href="#item-10" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-7" className="arrow-next arrow">
            {" "}
          </a>
        </div>

        <div
          className="carousel-item item-2"
          style={{ backgroundImage: `url(${item7})` }}
        >
          <h2>46PCS</h2>
          <a href="#item-6" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-8" className="arrow-next arrow">
            {" "}
          </a>
        </div>

        <div
          className="carousel-item item-3"
          style={{ backgroundImage: `url(${item8})` }}
        >
          <h2>46PCS</h2>
          <a href="#item-7" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-9" className="arrow-next arrow">
            {" "}
          </a>
        </div>
        <div
          className="carousel-item item-4"
          style={{ backgroundImage: `url(${item9})` }}
        >
          <h2>46PCS</h2>
          <a href="#item-8" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-10" className="arrow-next arrow">
            {" "}
          </a>
        </div>
        <div
          className="carousel-item item-5"
          style={{ backgroundImage: `url(${item10})` }}
        >
          <h2>46PCS</h2>
          <a href="#item-9" className="arrow-prev arrow">
            {" "}
          </a>
          <a href="#item-6" className="arrow-next arrow">
            {" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default CarouselSlider;
