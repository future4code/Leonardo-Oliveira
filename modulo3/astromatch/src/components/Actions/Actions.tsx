import React from 'react';
import { ActionsConteiner } from './Actions.styled';

const Actions = () => {
  return (
    <ActionsConteiner>
      <button className="action">
        <i className="fas fa-times"></i>
      </button>

      <button className="action">
        <i className="fas fa-star"></i>
      </button>

      <button className="action">
        <i className="fas fa-heart"></i>
      </button>
    </ActionsConteiner>
  );
};

export default Actions;
