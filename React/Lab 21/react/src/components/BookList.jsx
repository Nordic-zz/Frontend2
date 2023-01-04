import React from 'react'
import Book from './Book'

const BookList = ({ items }) => {
  return (
    <div className='ShoppingList'>
      {
        items && items.map(item => (
          <Book 
          key={item.id} 
          item={item} 
          />
        ))
      }
    </div>
  )
}

export default BookList