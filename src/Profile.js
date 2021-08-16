import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
export class Profile extends Component {
 
        componentDidMount =  () => {  
            if(this.props.auth0.isAuthenticated) {
               
              this.props.auth0.getIdTokenClaims()
              .then(result => {
                const jwt = result.__raw;
                const config = {
                  headers: {"Authorization" : `Bearer ${jwt}`},
                  method: 'get',
                  baseURL: process.env.REACT_APP_SERVER_URL,
                  url: '/test'
                }
                axios(config)
                  .then(axiosResults => console.log(axiosResults.data))
                  .catch(err => console.error(err));
              })
              .catch(err => console.error(err));
            }
          }  
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
