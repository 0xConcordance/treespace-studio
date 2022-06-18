import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

export const NftSite = () => {

    let { id } = useParams();

    const [uriData, setURIData] = useState({});

      useEffect (() => {
        fetch("/tokenFormatter/" + id).then((res) =>
            res.json().then((data) => {
                setURIData(data);
            })
        );
        }, []); 

    return(
        <div className='container frame'>

            <div className='row'>
                <div className='col-sm-6'>
                    <img className='individualNFT-2' src={uriData["image"]} />
                </div>
                <div className='col-sm-6'>
                    <h1>{uriData["name"]}</h1>
                    <h2>Owner</h2>
                    <h2>Creator</h2>
                </div>
                </div>
        </div>
    );
}