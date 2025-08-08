
import BookList from './components/BookList'
import {Books} from './utils/mockData'
import { useState } from 'react';

function App() {

  const [useText, SetText]= useState("");
  const [filtingBooks, setfilterBooks]= useState(Books);

  function handleSearch(){
    console.log("useText", useText);
    const filterBooks= Books.filter((book)=>
    book.title.toLowerCase().includes(useText.toLowerCase())
    );
    console.log("FilterBooks", filterBooks);
    setfilterBooks(filterBooks)
    

  }
  function refreshPage(){
    window.location.reload(true);
    
  }


  return (
    <div>
      <div>
        <h2 className='text-xl ml-150 text-red-500 font-bold'>Search Books</h2>
         <input type="text" id="Books" placeholder='Enter Your Book' className='border bg-gray-200 px-20 py-4 ml-130 rounded text-xl' onChange={(e)=>SetText(e.target.value)} /><br />
         <button className='border rounded px-4 py-2 bg-blue-400 ml-130 mt-2 cursor-pointer hover:bg-sky-600 mb-4' onClick={handleSearch} >Search Book</button>
            <button className='border rounded px-4 py-2 bg-green-400 ml-130 mt-2 cursor-pointer hover:bg-green-600 mb-4' onClick={refreshPage} >Refresh</button>
      </div>
       <BookList booksData={filtingBooks}/> 
    </div>
  )
 
   
  
}

export default App
