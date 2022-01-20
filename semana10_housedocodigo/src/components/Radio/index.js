import React from 'react';

import { ContainerRadio, Label, ErrorMessage } from './styles';

function Radio({ options, name, onChange, errorMessage, label = 'Sexo: ' }) {
  return (
    <ContainerRadio>
      {label}
      {options.map(option => (
        <Label key={option}>
          <input
            name={name}
            type="radio"
            value={option}
            onChange={onChange}
          />
          {option}          
        </Label>        
      ))}  
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}          
    </ContainerRadio>    
  );
}

export default Radio;