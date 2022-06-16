import {getAllData} from "../Services/WalletService"
import { useEffect, useState } from "react";
import {IndividualNfts} from "./IndividualNFTs"
import { propTypes } from "react-bootstrap/esm/Image";

export const MintedNFTs = () => {
    const [allNFTs, setAllNFTs] = useState({});
    const [cound, setCount] = useState(0);

      useEffect(() => {
        fetch("/format/createdNFTs/0x65638ff6D0eaD97b87F80E03676945FFF6BC138e").then((res) =>
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

    Call the API to get all token IDs
    use those token Ids to display the URI data 
    in a small card which is, it's own component.

    */
    var count = Object.keys(allNFTs).length;
    console.log(count);
    
    const compArr = []
    for(let i = 0; i <= count; i++) {
        // pass things into component
        compArr.push(<IndividualNfts data={allNFTs[i]}/>)
    }   
    
    console.log(compArr)
    
    return(
        <div className="wallet-frame">
            <h3>Your Minted NFTs.</h3>
            <p>All NFTs you have Minted.</p>
            <div className="row">
                {compArr}
            </div>
            
        </div>
    )
}