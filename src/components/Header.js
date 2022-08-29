import React from 'react';
import icon from '../assets/Troll Face.png';
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <img src={icon} alt={'header icon'} />
      <p>Meme Generator</p>
    </header>
  );
};

export default Header;
