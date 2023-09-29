import { useState } from 'react';

function Invite() {
    const guestList = require("../ressources/guestList.json");

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredGuests = guestList.filter((guest) =>
        guest.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h2>Guest List</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <table>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nom</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredGuests.map((guest, index) => (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{guest.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Invite;
