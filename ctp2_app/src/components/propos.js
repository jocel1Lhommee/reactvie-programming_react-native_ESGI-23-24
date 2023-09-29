import React from "react";

function Propos() {
    const donneesSoiree = {
        date: '15 octobre 2023',
        heureDebut: '19h00',
        heureFin: '23h00',
        programmation: 'Musique en direct, jeux et activités amusantes',
    };

    return (
        <div className="infos-soiree">
            <p><strong>Date :</strong> {donneesSoiree.date}</p>
            <p><strong>Heure de début :</strong> {donneesSoiree.heureDebut}</p>
            <p><strong>Heure de fin :</strong> {donneesSoiree.heureFin}</p>
            <p><strong>Programmation :</strong> {donneesSoiree.programmation}</p>
        </div>
    );
}

export default Propos;
