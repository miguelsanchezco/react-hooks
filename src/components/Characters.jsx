import {useState, useEffect} from 'react'

export default function Characters() {

    const [characters,setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }, [])

    return (
        <div className="Characters">
            {
                characters.map(
                    character => (<h3>{character.name}</h3>)
                )
                
            }
            <div>{characters.map(
                character => (<div><img src={character.image}/><br/><h3>{character.name}</h3> </div>)
            )}  </div>
            
        </div>
    )
}
