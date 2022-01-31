import React from 'react';
import './About.css';
import aboutImg from './img/about.jpg';
function About() {
  //  Up To Top Btn
  window.addEventListener('scroll', function () {
    const upToTop = document.querySelector('a.bottom__to__top');
    upToTop.classList.toggle('active', window.scrollY > 0);
  });
  return (
    <div className='about component__space' id='About'>
      <div className='container'>
        <div className='row'>
          <div className='col__2'>
            <img src={aboutImg} alt='' className='about__img' />
          </div>
          <div className='col__2'>
            <h1 className='about__heading'>About Me</h1>
            <div className='about__meta'>
              <p className='about__text p__color'>
                I have 1 year industry based project experience on which I
                learned about JavaScript based nodeJS and ReactJS framework and
                library respectively.
              </p>
              <p className='about__text p__color'>
                I learnt lots of technical stuff, debugging skills and team work
                and importance of version controlling throught that project.
              </p>
              <p className='about__text p__color'>
                <ul className='font-bold'>
                  <li>
                    1. Plot a graph of users according to percentile with help
                    of Canvas JS library in react.
                  </li>
                  <li>
                    2. Created interface of chat and file transferred and stored
                    it in AWS s3 bucket module in that project.
                  </li>
                  <li>3. Sendgrid API for contacts upgrade.</li>
                  <li>4. Read pdf using pdf-parse npm.</li>
                  <li>5. Worked on sequelize ORM.</li>
                </ul>{' '}
              </p>

              <p className='about__text p__color'>
                Except from that I am having beginner to intermediate level
                knowledge of C/C++ , Java, Go and Python programming language.
              </p>
              <p className='about__text p__color'>
                I always ready to adopt changes and learn new skillset which
                enhence my productivity and mindset. I always try to share my
                knowledge with my collegues and with friends that help me to
                grow.
              </p>
              <div className='about__button d__flex align__items__center justify__content__center__sm'>
                <a href='#'>
                  <button className='about btn pointer'>Download Cv</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className='up__to__top__btn'>
        <a href='#' className='bottom__to__top'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-chevron-up white'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
