import React, {Component} from 'react';
class App extends Component {
      state = {
          isLoading: true,
          NFT: [],
          error: null
      };
      getNft() {
          this.setState({loading: true
          }, () => {
              fetch("http://localhost:3000/api/nft").then(res => res.json()).then(result => this.setState({
                  loading: false,nft: result
              })).catch(console.log);
          });
      }
      componentDidMount() {this.getNft();
      }
      render() {
          const {NFT,error} = this.state;
          return (
            <React.Fragment>
            <h1>NFT</h1>
            {
                  error ? <p>
            {
                      error.message
                  } </p> : null}  {
                      NFT.map((nft1, n) => {
                          const {
                             attributes,value,description,image
                          } = nft1;
                          return (
                          <div key={n}><p>Trait Type: {attributes}</p><p>Value: {value}</p>
                              <p>Description: {description}</p><p>Image Tag: {image}</p>
                              <hr />
                          </div>
                          );
                      })
                     } </React.Fragment>);
          
          }
      }
    
export default App;