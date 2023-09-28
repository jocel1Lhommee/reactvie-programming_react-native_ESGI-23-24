import React from 'react';

class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Etudiant' };

        this.handleChange = this.handleChange.bind(this);
        this.monnomsaffiche = this.monnomsaffiche.bind(this);
    }

    bienvenue() {
        alert('❤️Bienvenue à ESGI Party !❤️');
    }

    monnomsaffiche(event) {
        event.preventDefault();
        alert(`❤️Bienvenue à ESGI Party ${event.target['nom'].value} !❤️
        Vous êtes : ${this.state.value}`);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (<div>
            <form className='formulaire' onSubmit={this.monnomsaffiche}>
                <label>
                    Choississez votre catégorie :
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Etudiant">Etudiant</option>
                        <option value="Enseignant permanent">Enseignant permanent</option>
                        <option value="Enseignant contractuel">Enseignant contractuel</option>
                        <option value="Intervenant externe">Intervenant externe</option>
                    </select>
                </label>
                <div className='nameGuest'>
                    <input type='text' name='nom' placeholder='Votre nom' />
                </div>
                <div className='signIn'>
                    <label>
                        S'enregistrer :
                    </label>
                    <input type='submit' value='Allons-y' onClick={this.bienvenue} />
                </div>
            </form>
        </div>)
    }
}

export default Formulaire;