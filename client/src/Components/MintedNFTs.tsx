import {getAllData} from "../Services/WalletService"
import { useEffect, useState } from "react";

export const MintedNFTs = () => {
    const [allNFTs, setAllNFTs] = useState([]);
    const [allURIs, setURIs] = useState([])

      useEffect(() => {
        fetch("/getMintedNftsByAddress/0x65638ff6D0eaD97b87F80E03676945FFF6BC138e").then((res) =>
            res.json().then((data) => {
                setAllNFTs(data);
            })
        );
    }, []);

    /* 
    for(let i = 0; i < 3; i++) {
        console.log(i)
        getAllData(allNFTs[i]).then(r => {
            setURIs(r)
        })    
    }
    */


    return(
        <>
            <h3>Your Minted NFTs.</h3>
            <p>All NFTs you have Minted.</p>
            
        </>
    )
}