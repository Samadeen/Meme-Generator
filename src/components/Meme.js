import { useState } from 'react';

import './Meme.css';
import Data from './MemeData';

const Meme = () => {
  const [memeImage, setNewImage] = useState();

  const getMemeImage = () => {
    const memeArr = Data.data.memes;
    const ranNum = Math.floor(Math.random() * memeArr.length);

    setNewImage(memeArr[ranNum].url);
  };

  return (
    <main>
      <div className='form'>
        <input text='text' className='form__input' placeholder='Top Text' />
        <input text='text' className='form__input' placeholder='Bottom Text' />
        <button onClick={getMemeImage} className='form__button'>
          Get a new meme image 📷
        </button>
      </div>
      <img src={memeImage} alt='Meme' className='form__image' />
    </main>
  );
};

export default Meme;
