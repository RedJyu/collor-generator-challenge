import { useState } from 'react';

function Form() {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className='container'>
      <h4>Color Generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type='text'
          placeholder='#f15025'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className='btn' type='submit' style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
}
export default Form;
