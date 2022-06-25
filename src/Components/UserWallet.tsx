import {getAllData} from "../Services/WalletService"
import { useEffect, useState } from "react";
import {IndividualNfts} from "./IndividualNFTs"
import { propTypes } from "react-bootstrap/esm/Image";
import {useEthers} from '@usedapp/core'

export const MintedNFTs = () => {
    const {account} = useEthers();

    const [allNFTs, setAllNFTs] = useState({});

    const [ loading, setLoading ] = useState("loading");

      useEffect(() => {
        fetch("/getOwnedNFTsByAddress/" + account ).then((res) =>
            res.json().then((data) => {
                setAllNFTs(data)
                setLoading("finished")
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
    
    const compArr = []

    Object.keys(allNFTs).map((keys) => {
        compArr.push(<IndividualNfts data={keys}/>)
    })
    
    return(
        <div className="wallet-frame">
            <h3>Your Wallet:</h3>

            {loading == "loading" &&
                <div>
                    <video autoPlay loop width={50} height={50}>    
                        <source src="/animations/full-logo-animation.mp4" type="video/mp4"/>
                    </video>                
                </div>
            }

            <div className="row">
                {compArr}
            </div>



            
        </div>
    )
}