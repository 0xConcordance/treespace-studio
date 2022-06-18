// REACT 
import { useState, useCallback, useEffect } from "react";
import {useDropzone} from 'react-dropzone';

// USEDAPP
import {useEthers, useContractFunction} from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'

// ABI & TOKEN ADDRESS
import { erc721Interface } from '../contract-data/ABI';
import { ERC721address } from '../contract-data/ContractAddress';

import { Buffer } from "buffer";

export const Mint = () => {
    
    const [uri, setUri] = useState("");
    const {account} = useEthers();
    const [image, setImage] = useState();
    const [imageHash, setImageHash] = useState("");
    const [bufferVal, setBuffer] = useState()

    const contract = new Contract(ERC721address, erc721Interface)
    const { state, send } = useContractFunction(contract, 'mint', {transactionName: 'mint'})
    const { status } = state

    useEffect(() => {
        if (image == undefined) return;
        const newImageHash = URL.createObjectURL(image)
        console.log("BROOO Smt")
        setImageHash(newImageHash)
        console.log(newImageHash)
    }, [image])

    const sendTransaction = (uri) => {
        send(uri)
    }

    const handleSubmit = (event) => {

        // upload image 

        event.preventDefault();
        sendTransaction(uri)
      }

    const onImageChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
            console.log(reader.results)
        }
    }   

    return(
        <div className="frame container">
            <h1>Mint an NFT</h1>
            <p>Mint a new NFT using the treespace ERC721 contract.</p>

            <form onSubmit={handleSubmit}>
                <label>Token URI:</label>
                <input type="file" name="myImage" accept="image/*" onChange={onImageChange} />
                <input type="text" value={uri} onChange={(e) => setUri(e.target.value)}/>
                <input type="submit" className='btn btn-dark'/>
            </form>
            <p>Status: {status}</p>
            <img src={imageHash}/>

        </div>
    )
}