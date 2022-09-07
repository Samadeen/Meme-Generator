import { useState, useEffect } from 'react';
import MemeData from './MemeData';
import './Meme.css';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemes, setAllMemes] = useState(MemeData);

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
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
};

export default Meme;
