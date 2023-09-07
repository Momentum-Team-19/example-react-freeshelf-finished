import React, { useState } from 'react'
import placeholder from '../images/placeholder.png'

function Book(props) {
  const { book } = props

  const [expanded, setExpanded] = useState(false)

  const fixBrokenImage = (event) => {
    event.target.src = placeholder
  }

  return (
    <div className="Book">
      <div className="book-detail">
        <h2>{book.title}</h2>
        <div>Author: {book.author}</div>
        <p>{book.shortDescription}</p>
        <button type="button" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Hide more info' : 'Show more info'}
        </button>
      </div>
      <div className="book-cover-img">
        <img
          src={book.coverImageUrl}
          onError={fixBrokenImage}
          alt={book.title}
        />
      </div>

      {expanded ? (
        <div style={{ marginTop: '1rem' }}>
          <div>
            URL: <a href={book.url}>{book.url}</a>
          </div>
          {book.publicationDate && (
            <div>
              Publication date:
              {book.publicationDate}
            </div>
          )}
          {book.publisher && (
            <div>
              Publisher:
              {book.publisher}
            </div>
          )}
          <p>
            More about this book:
            {book.detailedDescription}
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default Book
