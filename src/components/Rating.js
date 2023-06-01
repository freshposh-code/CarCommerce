import React, { useState } from "react";
import "./Styles/FilterSection.css";

function Rating() {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClick1 = () => setClick1(!click1);
  const handleClick2 = () => setClick2(!click2);
  const handleClick3 = () => setClick3(!click3);
  const handleClick4 = () => setClick4(!click4);
  return (
    <>
      <div className="rating">
        <i
          class={click ? "fa-solid fa-star" : "fa-regular fa-star"}
          onClick={handleClick}
        />
        <i
          class={click1 ? "fa-solid fa-star" : "fa-regular fa-star"}
          onClick={handleClick1}
        />
        <i
          class={click2 ? "fa-solid fa-star" : "fa-regular fa-star"}
          onClick={handleClick2}
        />
        <i
          class={click3 ? "fa-solid fa-star" : "fa-regular fa-star"}
          onClick={handleClick3}
        />
        <i
          class={click4 ? "fa-solid fa-star" : "fa-regular fa-star"}
          onClick={handleClick4}
        />
      </div>
    </>
  );
}

export default Rating;
