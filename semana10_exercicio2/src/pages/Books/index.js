import Book from "../Components/Book";
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
    <div>       
      {
        books.map((book)=>(
          <Book 
          key = {book.id}//Propriedade que dá um 'id'.. apenas para nao dar erro na tela
          title={book.title} 
          image={book.image}
          description={book.description}
          ></Book>
        ))
      }
    </div>    
  );
}

export default Books;