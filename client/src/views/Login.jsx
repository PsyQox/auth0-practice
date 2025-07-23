import React from 'react'
import style from './Login.module.css'
import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
    const { loginWithRedirect } = useAuth0()
    return (
            <button onClick={()=> { loginWithRedirect() }} className={style.button}>Login</button>
        
    )
}

export default Login