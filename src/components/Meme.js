import React from 'react';
import MemeData from './MemeData';
import './Meme.css';

export default function Meme() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemeImages, setAllMemeImages] = React.useState(MemeData);

  const getMemeImage = () => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeme((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  return (
    <main>
      <div className='form'>
        <input
          type='text'
          placeholder='Top text'
          className='form__input'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type='text'
          placeholder='Bottom text'
          className='form__input'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className='form__button' onClick={getMemeImage}>
          Get a new meme image 📷
        </button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className='meme__image' alt='meme' />
        <h2 className='meme__text top'>{meme.topText}</h2>
        <h2 className='meme__text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
}
