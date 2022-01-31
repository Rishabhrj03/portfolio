import React from 'react';
import footerImg from './img/Rishabh.svg';
import Instagram from './img/instagram.png';
import LinkedIn from './img/linkedin.png';
import GitHub from './img/github.png';
function Footer() {
  return (
    <div
      className='footer d__flex align__items__center justify__content__space__between pz-10'
      style={{
        padding: '10px 20px',
        zIndex: '100',
        backgroundColor: '#191919',
      }}
    >
      <img
        src={footerImg}
        alt=''
        className='footer__img pointer'
        style={{ width: '70px', height: '3rem' }}
      />
      <div className='mr-3 d__flex'>
        <a
          href={'https://www.instagram.com/rishabh_the_warrior/'}
          target='_blank'
        >
          <img
            src={Instagram}
            alt=''
            className='footer__img pointer mx-1'
            style={{ width: '30px' }}
          />
        </a>
        <a href={'https://www.linkedin.com/in/rishabhjoshi01/'} target='_blank'>
          <img
            src={LinkedIn}
            alt=''
            className='footer__img pointer mx-1'
            style={{ width: '30px' }}
          />
        </a>
        <a href={'https://github.com/Rishabhrj03'} target='_blank'>
          <img
            src={GitHub}
            alt=''
            className='footer__img pointer mx-1'
            style={{ width: '30px' }}
          />
        </a>
        <a href={'https://www.hackerrank.com/Rishabh2000'} target='_blank'>
          <i
            className='fab fa-hackerrank mx-1 mx-sm-0'
            style={{ fontSize: '30px', color: 'green' }}
          ></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
