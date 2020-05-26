import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./utils/MyStyled";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            company,
            img,
            price,
            info,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* Product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                {/* Product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model: {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    price : <span>$</span>
                    {price}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about the product :
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div className="">
                    <Link to="/">
                      <ButtonContainer>Back To Products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "Add To Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
