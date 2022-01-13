import React from 'react';
import {Link} from "react-router-dom";

function Book({id, title, image, price}){
    return(
        <div className='item-card'>
            <img src={image} className="item-card-photo" alt="Foto do livro"/>
            <span className='item-card-name'>{title}</span>
            <span className='item-card-price'>R$ {price}</span>
            <button className='item-card-button'><Link to="/cart">Comprar</Link></button>                       
            <button className='item-card-button'>
                <Link to={`/details/${id}`}>Detalhes</Link>
            </button>          
        </div>
    );
}

export default Book;