import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
export class Profile extends Component {
    render() {
        const {user,isAuthenticated}=this.props.auth0;
        
        return (
            <>
            { isAuthenticated && 
                <>  <h1>Hello authenticated user</h1>
                
    
                <h1>Username:{user.name}</h1>
                <h2 style={{color:"red"}}>email:{user.email}</h2>
                <img src={user.picture} alt={user.name} />
                    </>
                 }
          </>
        )
    }
}

export default withAuth0(Profile)
