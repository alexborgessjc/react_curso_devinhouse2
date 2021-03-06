import React, { useState } from 'react';

import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import Container from '../../components/Container';
import Radio from '../../components/Radio';
import Checkbox from '../../components/Checkbox';
import BotaoSwitch from '../../components/Switch';

import {FormDefault} from './styles';

function Form() {
  
  const [color, setColor] = useState('');
  const [comentario, setComentario] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [campoSexo, setCamposexo] = useState('')
  const [aceitaTermodeUso, setAceitaTermodeUso] = useState(false)
  
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

    if (!campoSexo) {
      currentErrors.campoSexo = 'Selecionar é obrigatório';
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

        <Checkbox
          checked={aceitaTermodeUso}
          onChange={(event) => setAceitaTermodeUso(event.target.checked)}
          label="Aceita o termo de uso"
          value={aceitaTermodeUso}
        />

        <Radio
          name="foodRadio"
          onChange={(event) => setCamposexo(event.target.value)}
          options={['Male', 'Female']}
          errorMessage={errors.campoSexo}
        />

        <BotaoSwitch
          label="Botao Switch"          
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
        

        <button type="submit">Salvar</button>
      </FormDefault>


    </Container>
  );
}

export default Form;