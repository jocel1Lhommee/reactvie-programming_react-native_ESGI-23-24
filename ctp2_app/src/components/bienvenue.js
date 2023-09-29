import React from 'react';

function Bienvenue() {
    const guestList = require("../ressources/guestList.json");

    return (
        <div>
            {guestList.map((guest, index) => (
                <div key={index}>
                    <img src={require(`../img/${guest.img}`)} alt={guest.name} />
                    <p>{guest.name}</p>
                </div>
            ))}
        </div>

    );
}

export default Bienvenue;
