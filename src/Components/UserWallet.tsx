import { useEffect, useState } from "react";
import {IndividualNfts} from "./IndividualNFTs"
import {useEthers} from '@usedapp/core'
import axios from "axios";

export const MintedNFTs = () => {
    const {account} = useEthers();

    const [allNFTs, setAllNFTs] = useState({});

    const [ loading, setLoading ] = useState("loading");

      useEffect(() => {

        axios({
            method: "GET",
            url: "/getOwnedNFTsByAddress/" + account
        }).then((res) => {
            setAllNFTs(res.data)
            setLoading("finished")
            console.log(res.data)
        }).catch(error => {
            console.log(error.response)
        })

        /* 
        fetch("/getOwnedNFTsByAddress/" + account, {mode:"cors"} ).then((res) =>
            res.json().then((data) => {
                setAllNFTs(data)
                setLoading("finished")
            })
        );

                            <video autoPlay loop width={50} height={50}>    
                        <source src="/animations/full-logo-animation.mp4" type="video/mp4"/>
                    </video>                

            */ 
        }, []); 

    const compArr = []

    Object.keys(allNFTs).map((keys) => {
        compArr.push(<IndividualNfts data={keys}/>)
    })
    
    return(
        <div className="wallet-frame">
            <h3>Your Wallet:</h3>

            {loading == "loading" &&
                <div>
                    <p>Loading</p>
                </div>
            }

            <div className="row">
                {compArr}
            </div>



            
        </div>
    )
}