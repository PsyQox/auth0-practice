import React from 'react'
import style from './Logout.module.css'
import { useAuth0 } from '@auth0/auth0-react'

const Logout = () => {
    const { logout } = useAuth0()
    return (
            <button onClick={()=> { logout() }} className={style.button}>Login</button>
        
    )
}

export default Logout