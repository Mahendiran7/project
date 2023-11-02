import React, { useEffect, useState } from "react";
import Product from "../Images/mobile.jpg";
import axios from "axios";
function Products() {
    const [Products,setproducts]= useState([])
    useEffect(()=>{
        const fetchproducts = ()=>{
            axios.get('https://6543876801b5e279de2087eb.mockapi.io/Products').then((res)=>{
                setproducts(res.data);
            }).catch((error)=>{
                console.log(error);
            })
        }
        fetchproducts()
    },[])
  return (
    <div className="container my-3">
      <div className="row">
        {
            Products.map((list)=>{
                return     <div className="col-3 ">
                <div
                  class="card shadow-lg bg-body-tertiary rounded"
                  style={{ width: "18rem;" }}>
                
                  <div className="position-relative">
                  <img src={list.image} class="card-img-top" alt="..." />
                 { list.Bestseller && <div className="bestseller">
                    Bestseller
                  </div>}
                  </div>
                    
                 
                  
                  </div>
                  <div class="card-body">
                    <h5 class="card-title" >{list.Name}</h5>
                    
                    <p>
                      <spam className="bg-success text-white px-2 rounded">{list.Rating}</spam>
                    </p>
                    <p>${list.offerPrice}</p>
                    <p><del>{list.price}</del></p>
                    <p class="card-text">
                     {list.Description}
                    </p>
                    <button btn btn-sm className="btn btn-sm btn-outline-primary">
                      Add to cart +
                    </button>
                  </div>
                </div>
              
            })
        }
    
      </div>
    </div>
  );
}

export default Products;
