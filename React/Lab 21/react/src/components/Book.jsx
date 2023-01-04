import { useState } from 'react'

const Book = ({ item }) => {

    console.log(item)
    
    const [clicked, setClicked] = useState(false);
    return (
        <div className={`ListItem ${clicked ? 'clicked' : ''}`} onClick={() => setClicked(!clicked)}>
            <p>{ item.title }</p>
            <p>{ item.author }</p>
        </div>
    )
}

export default Book