function Book(props) {
  const book = props.bookDetails;

  return (
    <div className="flex flex-col items-center bg-white shadow-md rounded-md p-4 m-4 w-64">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-32 h-48 object-cover rounded mb-4"
      />
      <div className="bg-gray-100 p-3 w-full text-center rounded">
        <h2 className="text-xl font-bold text-blue-800 mb-2">{book.title}</h2>
        <p className="text-gray-700"><strong>Author:</strong> {book.author}</p>
        <p className="text-gray-700"><strong>Genre:</strong> {book.genre}</p>
        <p className="text-gray-700"><strong>Published:</strong> {book.publishedYear}</p>
        <p className={`font-semibold ${book.status === 'Available' ? 'text-green-600' : 'text-red-500'}`}>
          {book.status}
        </p>
      </div>
    </div>
  );
}

export default Book;
