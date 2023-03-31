import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/userSlice';
import { nanoid } from 'nanoid';

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeSubmit = e => {
    const nameInput = e.currentTarget.name;
    const valueInput = e.currentTarget.value;
    switch (nameInput) {
      case 'name':
        setName(valueInput);
        break;
      case 'number':
        setNumber(valueInput);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    let id = nanoid()
    e.preventDefault();
    dispatch(addContact({ name, number, id }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Name</span>
        <input type="text" value={name} name="name" onChange={changeSubmit} />
        <span>Number</span>
        <input type="text" value={number} name="number" onChange={changeSubmit} />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};
