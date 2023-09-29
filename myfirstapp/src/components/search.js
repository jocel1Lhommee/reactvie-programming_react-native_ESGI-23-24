import React, { useState } from 'react';

function Search({ guestList }) {
    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const handleSearch = () => {
        const guest = guestList.find((guest) => guest.name === searchName);
        if (guest) {
            if (guest.isHere) {
                setSearchResult(`${guest.name} est présent et s'est enregistré.`);
            } else {
                setSearchResult(`${guest.name} est présent mais pas encore enregistré.`);
            }
        } else {
            setSearchResult(`${searchName} non présent dans la liste des invités.`);
        }
    };

    return (
        <div>
            <h2>Recherche un invité:</h2>
            <input
                type="text"
                placeholder="Entrez un nom"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
            />
            <button onClick={handleSearch}>Rechercher</button>
            <p>{searchResult}</p>
        </div>
    );
}

export default Search;
