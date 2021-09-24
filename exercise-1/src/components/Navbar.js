import React from 'react'

export default function Navbar() {
    return (
        <div className="header-container">
            <div className="header-inner">
            <span id="header-tittle">Vaikka Hesari</span>
            <div className="header-buttons">
                <button id="subscribe-button">Tilaa</button>
                <button>Kirjaudu</button>
                <button>Uutiset</button>
                <button>Lehdet</button>
                <button>Hae</button>
                <button>Valikko</button>
            </div>
            
            </div>
        </div>
    )
}

