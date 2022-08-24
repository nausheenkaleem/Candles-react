import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../assets/Lavender.jpg';
import '../style/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${bannerImage})`}}>
        <div className='Header'>
            <h1>Candles&Co.</h1>
            <p>
            Scents have a power of <italic><bold>MEMORY.</bold></italic>
            </p>
            <Link to="/menu">
                <button>
                    Explore
                </button>
            </Link>
        </div>

    </div>
  )
}

export default Home
