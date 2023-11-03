import axios from "axios";
import React, { useEffect, useState } from "react";

function Cart() {
  const [cartData,setCartData]= useState([])
  const fetchCartData = ()=>{
    axios.get('https://6543876801b5e279de2087eb.mockapi.io/cart').then((res)=>{
          setCartData(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  useEffect(()=>{
    fetchCartData()
  },[])

  const totalcost =cartData.reduce((prev,curr)=>prev+parseInt(curr.offerPrice),0)
  const Discount = (totalcost * 0.10)
  const cost = totalcost - Discount
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <ol class="list-group list-group-numbered">
            {
              cartData.map((list)=>{
                return  <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold">{list.Name}</div>
                <div><del>${list.price}</del></div>
                <div>${list.offerPrice}</div>
                {list.Description}
              </div>
              {
                list.Bestseller &&   <span class="badge bg-primary rounded-pill">Bestseller</span>
              }
            
            </li>
              })
            }
           
          </ol>
        </div>
        <div className="col-4">
        <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    SubTotal
    <span class="badge bg-primary rounded-pill">${totalcost}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
   Discount 10%
    <span class="badge bg-primary rounded-pill">{Discount}</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    totalcost <div>=</div>
    <span class="badge bg-primary rounded-pill">{cost}</span>
  </li>
</ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;
