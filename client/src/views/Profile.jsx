import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently  } = useAuth0()
    const token = getAccessTokenSilently()
    console.log(token);
    
    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    )
}

export default Profile