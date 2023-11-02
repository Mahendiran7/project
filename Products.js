import React from "react";
import Product from "../Images/mobile.jpg";
function Products() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-3 ">
          <div
            class="card shadow-lg bg-body-tertiary rounded"
            style={{ width: "18rem;" }}
          >
            <div>
            <img src={Product} class="card-img-top" alt="..." />
            
            </div>
            <div class="card-body">
              <h5 class="card-title">Apple</h5>
              <h6> Apple iphone 15 Pro Max</h6>
              <p>
                <spam className="bg-success text-white px-2 rounded">4.2</spam>
              </p>

              <p class="card-text">
                1TB Blue Titanium EMI Starts @ ₹9094.84/ Month
              </p>
              <button btn btn-sm className="btn btn-sm btn-outline-primary">
                Add to cart +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
