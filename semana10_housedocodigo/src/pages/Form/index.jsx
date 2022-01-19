import React, { useState } from 'react';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Container from '../../components/Container';

import {FormDefault} from './styles';

function Form() {
  
  const [color, setColor] = useState('');
  const [comentario, setComentario] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    let currentErrors = {};

    if (!comentario) {
      currentErrors.comentario = 'Comentário é obrigatório';
    } 
    
    if (!lastname) {
      currentErrors.lastname = 'Sobrenome é obrigatório';
    } 

    if (!email) {
        currentErrors.email = 'E-mail é obrigatório';
      }
    
    // Yup

    setErrors(currentErrors);
  }

  return (
    <Container>

      <FormDefault onSubmit={handleSubmit}>


      <Textarea
          label="Comentário"
          value={comentario}
          onChange={(event) => {
            setComentario(event.target.value)
          }}
          placeholder="Digite o seu comentário"
          errorMessage={errors.comentario}
         
        />
        
        <Input
          label="Lastname"
          value={lastname}
          onChange={(event) => {
            setLastname(event.target.value)
          }}
          placeholder="Digite seu sobrenome"
          errorMessage={errors.lastname}
        />

        <Input
          label="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          placeholder="Digite o seu e-mail"
          errorMessage={errors.email}
        />

        <Select
            label="Team Size ?"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            description=" "
            options={
                [
                {
                    label: '1',
                    value: 'red'
                },
                {
                    label: '2',
                    value: 'white'
                },
                {
                    label: '3',
                    value: 'green'
                }
                ]
            }
        />

        {color}
        

        <button type="submit">Salvar</button>
      </FormDefault>


    </Container>
  );
}

export default Form;