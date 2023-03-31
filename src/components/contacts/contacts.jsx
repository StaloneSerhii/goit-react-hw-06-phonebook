import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { onDelete } from 'redux/userSlice';

export const Contacts = () => {
  const contact = useSelector(state => state.contact);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch()

  const fiterRenderValue =()=>{
    const normalizedFilter = filter.toLocaleLowerCase();
   return  contact.filter(contact =>
   contact.name.toLocaleLowerCase().includes(normalizedFilter)
      );
  }
  const filterRend = fiterRenderValue()

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {filterRend.map(({ name, number, id }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{number}</span>
            <button onClick={()=>dispatch(onDelete(id))}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
