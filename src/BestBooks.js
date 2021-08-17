import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: []
    }
  }
  componentDidMount= ()=>{
    if (this.props.auth0.isAuthenticated){
        this.props.auth0.getIdTokenClaims().then(result=>{
            let jwt=result.__raw;
            let config={
                headers: {"Authorization" : `Bearer ${jwt}`},
                method: 'get',
                baseURL: "http://localhost:8000",
                url: '/book'                    
            }
            axios(config).then(response=>{
                console.log(response.data);
                this.setState({
                  bookData:response.data
                })
                
            })
        })
    }
}

  render() {
    return(
      <div>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.bookData.map(ele => {
          return <div>
          Book name:  {ele.title} Book description: {ele.description} {ele.email}
          </div>;
        })}
      </div>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
