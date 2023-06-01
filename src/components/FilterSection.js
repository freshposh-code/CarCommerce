import React, { useState } from "react";
import "./Styles/FilterSection.css";
import { filter, spectations } from "../data";
import ProductSpec from "./ProductSpec";

function FilterSection() {
  const [click, setClick] = useState(false);
  const [click2, setClick1] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClick2 = () => setClick1(!click2);
  return (
    <>
      <section className="Box-container">
        <div className="B-contain">
          {filter.map((filt) => {
            return (
              <div key={filt.id}>
                <div className="view">
                  <h1>{filt.ViewText}</h1>
                </div>
                <div className="filter">
                  <div className="filt">
                    <h2>{filt.filterText}</h2>
                  </div>
                  <div className="type">
                    <h4> {filt.filterType} </h4>
                    <select className="my-option">
                      <option> {filt.selectOption} </option>
                      <option> {filt.selectOption2} </option>
                      <option> {filt.selectOption3} </option>
                      <option> {filt.selectOption4} </option>
                    </select>
                  </div>
                  <div className="trans">
                    <h4> {filt.filterTrans} </h4>
                    <div className="div">
                      <p>
                        <i
                          class={
                            click
                              ? " tran fa-solid fa-check"
                              : " tran1 fa-solid fa-check"
                          }
                          onClick={handleClick}
                        ></i>
                        {filt.transmissionM}
                      </p>
                      <p>
                        <i
                          class={
                            click2
                              ? " tran fa-solid fa-check"
                              : "tran1 fa-solid fa-check"
                          }
                          onClick={handleClick2}
                        ></i>
                        {filt.transmissionA}
                      </p>
                    </div>
                  </div>
                  <div className="type">
                    <h4> {filt.filterType3} </h4>
                    <select className="my-option">
                      <option> {filt.myOption} </option>
                      <option> {filt.myOption2} </option>
                    </select>
                  </div>
                  <div className="type">
                    <h4> Car Levels </h4>
                    <select className="my-option">
                      <option> {filt.selectOption5} </option>
                      <option> {filt.selectOption6} </option>
                      <option> {filt.selectOption7} </option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="specs">
            <div className="preview-specs">
              {spectations.map((spec) => {
                return <ProductSpec spec={spec} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FilterSection;
