import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import BookList from './components/BookList'

const App = () => {
    const Books = [
    {
      id: "sdom878fn87fn",
      title: "Lord of the Rings",
      author: "JRR Tolkien"
    },    
    {
      id: "nc7swehjef",
      title: "2001: A Space Oddesy",
      author: "CS Lewis"
    }
  ]
  const [items, setItems] = useState(Books)

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('itemList'))
    console.log(storedItems)
    if(storedItems && storedItems.length) {
      setItems(storedItems)
    }
  }, [])

  
  useEffect(() => {
    // if(items.length) {
      localStorage.setItem('itemList', JSON.stringify(items))
    // }else {
    //   localStorage.removeItem('itemList')
    // }
  }, [items])

  return (
    <div>
      <Header title="Book suggestions" />
      <BookList items={items} />
    </div>
  )
}

export default App
