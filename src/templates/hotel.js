import React from 'react';
import '../App.css';
import '../css/hotel.css';
import Navbar from '../layout/Navbar';
import HOTEL from '../video/video2.mp4';
import Google from '../templates/google';

export default function Hotel() {
  return (
    <div>
      <Navbar />
      <div className="big-video">
        <video autoPlay loop muted className="video">
          <source src={HOTEL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="data-info">
        <h1 className="h1">Resort style</h1>
        <p className="p">Travel for everyone</p>
        <p className="p">Why settle for just good enough when you can stay at a resort?</p>
      </div>
      {/* <HOTELCARDS/> */}
      <br/><br/><br/><br/><br/>
      <Google/>
    </div>
  );
}
