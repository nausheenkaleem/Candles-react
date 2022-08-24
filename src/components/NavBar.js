import React, { useState }from 'react';
import Image from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../style/NavBar.css';

function NavBar() {
    const [Openlinks,setOpenlinks] = useState(false);

    const togglebutton = () =>
    {
        setOpenlinks(!Openlinks);
    };

  return (
    <div className='navbar'>
        <div className='logo' id = {Openlinks ? "open" : "close"}>
            <img src={Image}/>
            <div className='hidden-links'>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/about'> About Us </Link>
            <Link to='/contact'> Contact </Link>
            <Link to= '/cart'>
                <AddShoppingCartIcon/>
                <span className='bag-quantity'>
                    <span>6</span>
                </span>
            </Link>
            </div>
        </div>
        <div className='nav-links'>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/about'> About Us </Link>
            <Link to='/contact'> Contact </Link>
            <Link to= '/cart'>
            <div className='nav-bag'>
                <AddShoppingCartIcon/>
                <span className='bag-quantity'>
                    <span>6</span>
                </span>
            </div>
            </Link>
            <button onClick={togglebutton}>
                <ReorderIcon/>
            </button>
        </div>
        
    </div>
  )
}

export default NavBar
