import React from 'react';
import Actions from '../Actions/Actions';
import { CardContainer } from './Card.styled';

export const Card: React.FC = () => {
  return (
    <CardContainer>
      <div className="photo">
        <div className="text-user">
          <div className="name-age">
            <h2>Nome usuáiro</h2>
            <h2>idade usuário</h2>
          </div>
          <div className="bio">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            iste veniam aliquid doloribus sapiente eos, vitae quas soluta sint
            molestias.
          </div>
        </div>
      </div>
      <Actions />
    </CardContainer>
  );
};
