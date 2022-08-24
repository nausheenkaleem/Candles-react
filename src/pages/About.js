import React from 'react';
import TopImage from '../assets/about.jpg';
import Woman from '../assets/person1.jpg';
import Man from '../assets/person1.jpg';
import Men from '../assets/person1.jpg';
import '../style/About.css';

function About() {
  return (
    <div className='about'>
      <div className='TopAbout' style={{ backgroundImage: `url(${TopImage})`}}></div>
      <div className='BottomAbout'>
      <h1>About</h1>
        <p>You all must have heard and observed about your Personality Traits according to your Zodiac Signs. When you go shopping for perfumes, you choose a fragrance that suits your personality, right? Then why not do the same for your Candles? You don't know how you could do that!
        </p>
        <p>Just like  the wet mud smell of rainfall reminds you of your happy childhood play. In the same manner when you use a same scent for a moment that moment becomes memorable, now whenever you will sense this scent you will be immediately be nostalgic for the happy moment attached to it.</p>
        </div>
      </div>
  );
}

export default About
