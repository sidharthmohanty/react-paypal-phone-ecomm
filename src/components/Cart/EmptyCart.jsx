import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-capitalize text-light-gray">
          <h1>Your cart is currently empty</h1>
        </div>
      </div>
    </div>
  );
}
