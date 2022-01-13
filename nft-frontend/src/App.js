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
                  loading: false,NFT: result
              })).catch(console.log);
          });
      }
      componentDidMount() {this.getNft();
      }
      render() {
          const {NFT} = this.state;
          return (
            <React.Fragment>
            <h1>NFT</h1>
           {
                      NFT.map((nft1, key) => {                         
                        return (
                          <div key={key}><p>Trait Type: {nft1.attributes}</p><p>Value: </p>
                              <p>Description: {nft1.description}</p><p>Image Tag: src={nft1.image}</p>
                              <hr />
                          </div>
                          );
                      })
                     } </React.Fragment>);
          
          }
      }
    
export default App;