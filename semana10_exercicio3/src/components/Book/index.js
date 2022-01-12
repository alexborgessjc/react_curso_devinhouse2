import React from 'react';

function Book({title, image, price}){
    return(
        <div className='item-card'>
            <img src={image} className="item-card-photo" alt="Foto do livro"/>
            <span className='item-card-name'>{title}</span>
            <span className='item-card-price'>R$ {price}</span>
            <button className='item-card-button'>Comprar</button>  
            <button className='item-card-button'>Detalhes</button>  
        </div>
    );
}

export default Book;