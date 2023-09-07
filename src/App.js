import './App.css'
import bookData from './book-data.json'
import Book from './components/Book'

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      {bookData.map((bookObject) => (
        <Book book={bookObject} key={bookObject.url} />
      ))}
    </div>
  )
}

export default App
