import React from 'react'
import { useState, useEffect } from 'react'

const Header = ({ title }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
    <div>
        <div className='Header'>
            <h1>{ title }</h1>
        </div>
        <div className='mt-4'>
            { loggedIn && <p className='Header'>Christer S</p>}
            { !loggedIn && <button className='clear-btn' onClick={() => setLoggedIn(true)}>Log In</button>}            
        </div>
    </div>
    )
}

export default Header