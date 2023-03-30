import { useSelector } from 'react-redux';
import React from 'react';

export const Contacts = () => {
  const value = useSelector(state => state.contact);
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {value.map(({ name, number }) => (
          <li>
            <span>{name}</span>
            <span>{number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
