function bienvenue() {
    alert('❤️Bienvenue à ESGI Party !❤️');
}

function monnomsaffiche(nameGuest) {
    nameGuest.preventDefault();
    alert(`❤️Bienvenue à ESGI Party ${nameGuest.target['nom'].value} !❤️`);
}

function Container() {
    return (<div>
        <form className='formulaire' onSubmit={monnomsaffiche}>
            <div className='nameGuest'>
                <input type='text' name='nom' placeholder='Votre nom' />
            </div>
            <div className='signIn'>
                <label>
                    S'enregistrer :
                </label>
                <input type='submit' value='Allons-y' onClick={bienvenue} />
            </div>
        </form>
    </div>)
}

export default Container;