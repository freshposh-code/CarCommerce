import React from "react";
import { Link } from "react-router-dom";

export default function ProductSpec({ spec }) {
  const {
    specImage,
    specName,
    specName2,
    specs,
    inSpecs1,
    inSpecs2,
    inSpecs3,
    Auto,
    specPrice,
    specInfo,
    specPrice2,
    specLink,
  } = spec;

  return (
    <>
      <div className="full-spec">
        <div className="spec">
          <div className="spec-image">
            <img src={specImage} alt={specName} />
          </div>
          <div className="specs-content">
            <h3>{specName}</h3>
            <p>{specName2}</p>
            <p>{specs}</p>
            <div className="in-spec">
              <div>
                <p> {inSpecs1}</p>
                <p>{inSpecs2}</p>
              </div>
              <div>
                <p>{inSpecs3}</p>
                <p>{Auto}</p>
              </div>
              <div className="span">
                <p>
                  Price - <span>{specPrice}</span>
                </p>
                <p>
                  {specInfo}
                  <span>{specPrice2}</span>
                </p>
                <Link to="">
                  <h5>{specLink}</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
