import React from 'react';

function Book({title, image, description}){
    return(
        <div className='item-card'>
            <img src={image} alt="Foto do livro"/>
            <span>{title}</span>
            <span>{description}</span>
        </div>
    );
}

export default Book;