import React, {useState, useEffect} from "react";

function MnFT(){
    const [NFT, setNFT]= useState([null])

    useEffect(() => {
        fetch("http://localhost:3000/api/nft").then(res =>{
            if (res.ok){
                return res.json();
            }
        }).then(data =>{
            console.log (data);
            console.log (data.prop.description.description);
            setNFT(data)
        })
    },[])

    return (
        <div className="nft">
            <img src={NFT.prop.image.description} alt="Anime NFT"/>
            <h4>Metadata</h4>
            <p>Name: {NFT.prop.name.description}</p>
            <p>Description: {NFT.prop.description.description}</p> 
            <p>Image: {NFT.prop.image.description}</p>    
        </div>    
   
    );

}

export default MnFT;
