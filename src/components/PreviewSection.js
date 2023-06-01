import React from "react";
import "../components/Styles/PreviewSection.css";
import ProductCard from "./ProductCard";
import { preview, products } from "../data";

function PreviewSection() {
  return (
    <>
      <div className="preview">
        {preview.map((view) => {
          return (
            <div className="preview-content" key={view.id}>
              <h1 className="font">
                <i className="car-div fa-solid fa-car"></i> {view.ViewText}
              </h1>
              <p>{view.ViewDesc}</p>
            </div>
          );
        })}
      </div>

      <section className="box-container">
        <div className="box-preview">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </section>
    </>
  );
}

export default PreviewSection;
