import React from 'react';
import {Link} from "react-router-dom";

function Details({title, image, description,price}){
    return(
        <div className='item-book-detail'>
            <img src={image} className="item-book-photo-detail" alt="Foto do livro"/>            
                <span className='item-book-name-detail'>{title}</span><p/>
                <span className='item-book-description-detail'>{description}</span><p/>
                <span className='item-book-price-detail'>R$ {price}</span><p/>
                <button className='item-card-button'><Link to="/cart">Adicionar ao carrinho</Link></button>
                                      
        </div>
    );
}

export default Details;