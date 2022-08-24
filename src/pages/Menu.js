import React from 'react';
import { MenuList } from '../helper/List';
import MenuItems from "../components/Items";
import '../style/Menu.css';
import bannerImage from '../assets/BannerImage.jpg';


function Menu() {
  return (
    <div className='menu' style={{ backgroundImage: `url(${bannerImage})`}}>
            <h1 className='title'>Our Candles</h1>
            <div className='MenuList'>
            {MenuList.map((menuItems, key) => {
                return (
                    <MenuItems
                    key={key}
                    image={menuItems.image} name={menuItems.name} price={menuItems.price} button ={menuItems.button}
                     />
                );
            })}
            </div> 
    </div>
  );
}

export default Menu;
