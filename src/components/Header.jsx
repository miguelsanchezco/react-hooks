import {useState} from 'react'  //rfc

export default function Header() {

    const [darkMode,setDarkmode] = useState(false)
    const handleClick = () => {
        setDarkmode(!darkMode);
    }

    return (
        <div className='Header'>
            <h1>ReactHooks!</h1>
            <button type='button' onClick = {handleClick}>{darkMode? 'Dark Mode':'Ligth Mode'}</button>            
        </div>
    )
}


