import React from 'react';
import './Service.css';
import './Skills.css';

function Service() {
  return (
    <div className='service component__space' id='Skills'>
      <div className='heading'>
        <h1 className='heading'>Skills</h1>
        <p className='heading p__color'>My Technical Expertice level</p>
      </div>

      <section class='skills container'>
        {/* <div class='title'>
          <h2>skills</h2>
          <div>
            <h2>my skills</h2>
          </div>
        </div> */}
        <div class='grid'>
          <div class='item'>
            <div class='item-text'>
              <span>JavaScript</span>
              <span class='w-80'>80%</span>
            </div>
            <div class='progress'>
              <div class='progress-bar w-80'></div>
            </div>
          </div>

          <div class='item'>
            <div class='item-text'>
              <span>Node JS</span>
              <span class='w-75'>75%</span>
            </div>
            <div class='progress'>
              <div class='progress-bar w-75'></div>
            </div>
          </div>

          <div class='item'>
            <div class='item-text'>
              <span>HTML</span>
              <span class='w-85'>85%</span>
            </div>
            <div class='progress'>
              <div class='progress-bar w-85'></div>
            </div>
          </div>

          <div class='item'>
            <div class='item-text'>
              <span>CSS</span>
              <span class='w-75'>75%</span>
            </div>
            <div class='progress'>
              <div class='progress-bar w-75'></div>
            </div>
          </div>

          <div class='item'>
            <div class='item-text'>
              <span>React JS</span>
              <span class='w-60'>60%</span>
            </div>
            <div class='progress'>
              <div class='progress-bar w-60'></div>
            </div>
          </div>

          {/* <div class='item'>
            <div class='item-text'>
              <span>PHP</span>
              <span class='w-68'>68%</span>
            </div>
            <div class='progress'>
              <div class='progress-bar w-68'></div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Service;
