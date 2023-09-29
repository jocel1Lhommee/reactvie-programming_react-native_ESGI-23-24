import React from 'react';
import { useEffect } from "react";

function Bienvenue() {
    const guestList = require("../ressources/guestList.json");
    useEffect(()=>{
        alert(`Vous avez cliquer ${clic} fois`);
    });
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
