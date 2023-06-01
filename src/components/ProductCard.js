import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
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

  const {
    productImg,
    productDesc,
    productName,
    productPrice,
    productSale,
    productSpec,
    productSpec1,
    productSpec2,
    productSpec3,
  } = product;
  return (
    <div className="box">
      <div className="box-preview-image">
        <img src={productImg} alt={productName} />
        <div className="empty-box"></div>
        <h4>{productSale}</h4>
      </div>
      <div className="car-preview-content">
        <h2>{productName}</h2>
        <h3 className="Buttton">${productPrice}</h3>
        <div className="empty-div2"></div>
        <p>{productDesc}</p>
        <div className="star-container">
          <i
            className={click ? "fa-solid fa-star" : "fa-regular fa-star"}
            onClick={handleClick}
          />
          <i
            className={click1 ? "fa-solid fa-star" : "fa-regular fa-star"}
            onClick={handleClick1}
          />
          <i
            className={click2 ? "fa-solid fa-star" : "fa-regular fa-star"}
            onClick={handleClick2}
          />
          <i
            className={click3 ? "fa-solid fa-star" : "fa-regular fa-star"}
            onClick={handleClick3}
          />
          <i
            className={click4 ? "fa-solid fa-star" : "fa-regular fa-star"}
            onClick={handleClick4}
          />
        </div>
        <div className="product-spec">
          <h3>{productSpec}</h3>
          <h3>{productSpec1}</h3>
          <h3>{productSpec2}</h3>
          <h3>{productSpec3}</h3>
        </div>
      </div>
      <p className="preview-button">
        <Link to="/Car-listing" className="preview-link">
          Preview
        </Link>
      </p>
    </div>
  );
}
