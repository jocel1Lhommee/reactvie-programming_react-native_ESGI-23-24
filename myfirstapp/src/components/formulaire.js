import React, { useState } from 'react';
import Etudiant from './etudiant';
import Permanent from './permanenet';
import Contractuel from './contractuel';
import Intervenant from './intervenant';

function Formulaire() {
    const [categorie, setCategorie] = useState('Etudiant');
    const [name, setName] = useState('');
    const [guestList] = useState([
        { name: 'Loïs', isHere: false },
        { name: 'Jocelyn', isHere: false },
        { name: 'Guillaume', isHere: false },
        { name: 'Teddy', isHere: false },
    ]);

    const bienvenue = () => {
        alert('❤️Bienvenue à ESGI Party !❤️');
    }

    const monnomsaffiche = (event) => {
        event.preventDefault();
        let message = `Désolé, ${name} n'est pas sur la liste des invités.`;
        for (let i = 0; i < guestList.length; i++) {
            if (guestList[i].name === name) {
                guestList[i].isHere = true;
                message = renderCategorySpecificComponent();
                break;
            }
        }

        alert(message);
    }

    const handleChange = (event) => {
        setCategorie(event.target.value);
    }

    const renderCategorySpecificComponent = () => {
        switch (categorie) {
            case 'Etudiant':
                return Etudiant() + name + ' !';
            case 'Enseignant permanent':
                return Permanent() + name + ' !';
            case 'Enseignant contractuel':
                return Contractuel() + name + ' !';
            case 'Intervenant externe':
                return Intervenant() + name + ' !';
            default:
                return `❤️Bienvenue à ESGI Party ${name} !❤️ 
                Vous êtes : ${categorie}`;
        }
    }

    return (
        <div>
            <form className='formulaire' onSubmit={monnomsaffiche}>
                <label>
                    Choisissez votre catégorie :
                    <select value={categorie} onChange={handleChange}>
                        <option value="Etudiant">Etudiant</option>
                        <option value="Enseignant permanent">Enseignant permanent</option>
                        <option value="Enseignant contractuel">Enseignant contractuel</option>
                        <option value="Intervenant externe">Intervenant externe</option>
                    </select>
                </label>
                <div className='nameGuest'>
                    <input
                        type='text'
                        name='nom'
                        placeholder='Votre nom'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='signIn'>
                    <label>
                        S'enregistrer :
                    </label>
                    <input type='submit' value='Allons-y' onClick={bienvenue} />
                </div>
            </form>
        </div>
    );
}

export default Formulaire;
