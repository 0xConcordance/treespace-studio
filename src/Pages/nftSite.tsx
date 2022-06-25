import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useEthers } from '@usedapp/core';

export const NftSite = () => {

    const {account} = useEthers()

    let { id } = useParams();

    const [uriData, setURIData] = useState({});
    const [loading, setLoading] = useState(true);

      useEffect (() => {
        fetch("/tokenFormatter/" + id).then((res) =>
            res.json().then((data) => {
                setURIData(data);
                setLoading(false);
            })
        );
        }, []); 

        if(loading) {
            return (
                <div className="container">
                    <video autoPlay loop width={50} height={50}>    
                        <source src="/animations/full-logo-animation.mp4" type="video/mp4"/>
                    </video>                

                </div>
            )
        } else {
            return (
                <div className='container frame'>

                <div className='row'>
                    <div className='col-sm-6'>
                        <img className='individualNFT-2 shadow' src={uriData["image"]} />
                    </div>
                    <div className='col-sm-6'>
                        <h1>{uriData["name"]}</h1>
                        <p>{uriData["describtion"]}</p>
                        <hr></hr>
                        <a>Owned by {account}</a>

                        <h3 className='nft-headline'>Details </h3>
                        <hr></hr>
                        <a>@ View on Etherscan</a><br></br>
                        <a>@ View Metadata</a><br></br>
                        <a>@ View on IPFS</a><br></br>

                    </div>
                    </div>
            </div>
            )
        }
}