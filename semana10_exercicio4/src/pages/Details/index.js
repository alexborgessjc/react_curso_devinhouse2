import { useEffect, useState } from 'react';
import Detail from '../../components/Detail';
import { useParams } from 'react-router-dom';

function Details(){
    const params = useParams();
    const[books, setBooks] = useState([]);

    useEffect(()=>{
        async function handleGetCard(){
          const response = await fetch(`http://localhost:3333/books?id=${params.id}`);
          const data = await response.json();
          setBooks(data);
        }
        handleGetCard();  
      }, [params.id])

    return(
        <div className='container-detail'>       
            {
            books.map((book)=>(
                <Detail
                key = {book.id}//Propriedade que dá um 'id'.. apenas para nao dar erro na tela
                image={book.image}
                title={book.title}            
                price={book.price}
                description={book.description}
                >             
                </Detail>
            ))
            }
      </div>      
    );
    
}

export default Details;