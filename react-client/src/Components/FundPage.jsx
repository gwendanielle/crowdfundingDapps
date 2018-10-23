import React, { Component } from 'react';

const API = 'http://samu.localtunnel.me/api/projects/';

class FundPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: null
        };
      }
    
      componentDidMount() {
        fetch(API)
          .then(res => {
              return res.json();
          })
          .then(
            (result) => {
              console.log(result);
              this.setState({
                isLoaded: true,
                items: result
              });
            },
            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <h2>{item.title}</h2>
          );
        }
    }
}
export default FundPage;