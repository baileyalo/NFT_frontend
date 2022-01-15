import React, {useState, useEffect} from "react";
import abi from '../ABI/abi.js';
import Web3 from 'web3';

function MnFT(){
    const [NFT, setNFT]= useState([])
    const [isloading, setIsloading]= useState(true);

    useEffect(() => {

        const fetchURI = async ()=> {

        let GetURI = "";
        let contractadd= "0x4b2d190a1b30ac78f07454acdd3b0fb8e9b6ef9d";

        let web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/a5810a1d99f246608d85248e4c20594d"));
        const contract = new web3.eth.Contract(abi, contractadd);

        GetURI= await contract.methods.GetURI().call();
      
        fetch(GetURI).then(res =>{
            if (res.ok){
                return res.json();
            }
        }).then(data =>{
            console.log (data.prop.description.description);
            setNFT(data)

            setIsloading(false)

        })
        }
        fetchURI();       

    },[])

        
    return (

         <div className="nft">
        { isloading && <div>..Loading...</div>}
           { 
         NFT && (
            <article>
            
            <img src={NFT.prop.image.description} alt="NFT"/>
            <h4>Metadata</h4>
            <p>Name: {NFT.prop.name.description}</p>
            <p>Description: {NFT.prop.description.description}</p> 
            <p>Image: {NFT.prop.image.description}</p>    
            </article>
                
         )
}
            </div>
    );

}

export default MnFT;
