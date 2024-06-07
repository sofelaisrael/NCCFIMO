import React, { useState, useEffect } from 'react';

import { GoArrowLeft, GoArrowRight } from "react-icons/go"
//import PageTitle from './PageTitle'; // Assuming you have this component
import img1 from '../assets/4.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';

const contentData = [
  {
    img: img1,
    title: "GABRIEL SANTANMI JACOB",
    subtitle: "General Secretary",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, numquam?",
  },
  {
    img: img2,
    title: " ODUMU ISAIAH AKOGWU",
    subtitle: "President/Chairman",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ad dolores ab provident nesciunt dolor.",
  },

  {
    img: img3,
    title: "MISSION FAMILY",
    subtitle: "Spreading the good news",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam maxime ut consequuntur! Praesentium.",
  },
];

const ContentTransition = () => {
  return (
    <div className="wrapper">
      <div className="containee">

        <input type="radio" name='slide' id='c1' />
        <label htmlFor="c1" className='card' >
          <div className="row">
            <div className="icon">S</div>
            <div className="description">
              <h4>State Sunday Service</h4>
              <p>5:00PM</p>
            </div>
          </div>
        </label>
        
        <input type="radio" name='slide' id='c2' />
        <label htmlFor="c2" className='card'>
          <div className="row">
            <div className="icon">M</div>
            <div className="description">
              <h4>Disciplineship</h4>
              <p>5:00PM</p>
            </div>
          </div>
        </label>

        <input type="radio" name='slide' id='c3' />
        <label htmlFor="c3" className='card'>
          <div className="row">
            <div className="icon">T</div>
            <div className="description">
              <h4>State Sunday of Prayer and Fasting</h4>
              <p>8:00PM</p>
            </div>
          </div>
        </label>

        <input type="radio" name='slide' id='c4' />
        <label htmlFor="c4" className='card'>
          <div className="row">
            <div className="icon">W</div>
            <div className="description">
              <h4>Varieties Night</h4>
              <p>8:00PM</p>
            </div>
          </div>
        </label>

        <input type="radio" name='slide' id='c5' />
        <label htmlFor="c5" className='card'>
          <div className="row">
            <div className="icon">T</div>
            <div className="description">
              <h4>Prayer Chain</h4>
              <p>8:00PM</p>
            </div>
          </div>
        </label>

        <input type="radio" name='slide' id='c6' />
        <label htmlFor="c6" className='card'>
          <div className="row">
            <div className="icon">F</div>
            <div className="description">
              <h4>Community Outreach</h4>
              <p>2:00PM</p>
            </div>
          </div>
        </label>

        <input type="radio" name='slide' id='c7' />
        <label htmlFor="c7" className='card'>
          <div className="row">
            <div className="icon">S</div>
            <div className="description">
              <h4>Varieties Night</h4>
              <p>5:00PM</p>
            </div>
          </div>
        </label>

      </div>
    </div>
  );
};

export default ContentTransition;
