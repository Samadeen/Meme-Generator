import './Meme.css';

const Meme = () => {
  return (
    <main>
      <form className='form'>
        <input text='text' className='form__input' placeholder='Top Text' />
        <input text='text' className='form__input' placeholder='Bottom Text' />
        <button className='form__button'>Get a new meme image 📷</button>
      </form>
    </main>
  );
};

export default Meme;
