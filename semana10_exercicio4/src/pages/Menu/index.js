import React from 'react';
import Book from '../../components/Book';
import { useEffect, useState } from 'react';

function Menu(){
    const[books, setBooks] = useState([]);

    useEffect(()=>{
        async function handleGetCard(){
          const response = await fetch('http://localhost:3333/books?_limit=20');
          const data = await response.json();
          setBooks(data);
        }
        handleGetCard();  
      }, [])

    return (
        <nav className='menu'>            
           <h1 className='menu-title'>House do Cóodigo</h1>
           <h1 className='menu-quantity'>{books.length} produtos</h1>
        </nav>        
    )
}

export default Menu;