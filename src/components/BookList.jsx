  import Book from './Book';
  function BookList(props){
        console.log("props", props);
      return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {
              props.booksData.map((data)=>(
                <Book key={data.id} bookDetails={data}></Book>
              ) )
            }
        </div>
      )
      
  }
  export default BookList;