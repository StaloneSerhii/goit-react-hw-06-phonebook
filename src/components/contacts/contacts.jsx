import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { onDelete } from 'redux/Slice';

export const Contacts = () => {
  const contact = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch()

  const fiterRenderValue =()=>{
    console.log(contact);
    const normalizedFilter = filter.toLocaleLowerCase();
    return contact.filter(contact => 
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
            <button onClick={()=>dispatch(onDelete(id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
