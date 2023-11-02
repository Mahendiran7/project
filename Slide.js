import React from 'react'
import slide1 from '../Images/amazon1.jpg'
import slide2 from '../Images/amazon2.jpg'
import slide3 from '../Images/amazon3.jpg'

function Slide() {
  return (
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <img src={slide1} class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img src={slide2}class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={slide3} class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Slide