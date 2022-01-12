import Book from '../../components/Book';
import { useEffect, useState } from 'react';

function Books() {
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
    <div className='container'>       
      {
        books.map((book)=>(
            <Book 
            key = {book.id}//Propriedade que dá um 'id'.. apenas para nao dar erro na tela
            image={book.image}
            title={book.title}            
            price={book.price}
            >             
            </Book>
        ))
      }
    </div>    
  );
}

export default Books;