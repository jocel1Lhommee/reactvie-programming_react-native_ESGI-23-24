function bienvenue() {
    alert('Bienvenue à ESGI Party !');
}

function Container() {
    return (<div>
        <form className='formulaire'>
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