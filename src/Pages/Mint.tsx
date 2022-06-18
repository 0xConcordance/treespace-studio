// REACT 
import { useState, useCallback, useEffect } from "react";
import {useDropzone} from 'react-dropzone';
import { ImageUpload  } from 'react-ipfs-uploader'
import ipfs from "ipfs"

// USEDAPP
import {useEthers, useContractFunction} from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'

// ABI & TOKEN ADDRESS
import { erc721Interface } from '../contract-data/ABI';
import { ERC721address } from '../contract-data/ContractAddress';

import { Buffer } from "buffer";
import { isPostfixUnaryExpression } from "typescript";
import { setMaxListeners } from "process";

export const Mint = () => {

    const [uri, setUri] = useState("");
    const {account} = useEthers();
    const [imageHash, setImageHash] = useState("");
    const [bufferVal, setBuffer] = useState()

    // name
    const [name, setName] = useState("")
    // describtion
    const [describtion, setDescribtion] = useState("")
    // image
    const [image, setImage] = useState();
    // royalties
    const [royalties, setRoyalties] = useState("");
    // royaltieReciever
    const [royaltieReciever, setRoyaltieReceiver] = useState("");
    
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
        event.preventDefault();

        // we need to upload all the data to ipfs

        sendTransaction(uri)
      }

    const onImageChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0]
        const reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => {
            console.log(reader.result)
        }
    }   

    return(
        <div className="frame container">
            <h1>Mint an NFT</h1>
            <p>Mint a new NFT using the treespace ERC721 contract.</p>

            <label>Image:</label>
            <ImageUpload setUrl={setImageHash} />

            <form onSubmit={handleSubmit} >

                <div className="form-group lastFormGroup">
                    <label>*Name of NFT:</label>
                    <input type="text" required className="form-control" placeholder="Big Ventilator" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="form-group lastFormGroup">
                    <label>*Describtion:</label>
                    <textarea rows={3} required className="form-control" placeholder="The biggest Ventilator in town has just entered the arena." value={describtion} onChange={(e) => setDescribtion(e.target.value)}></textarea>
                </div>
                
                <div className="form-group lastFormGroup">
                    <label>*Royalties:</label>
                    <input type="number" required className="form-control" max={100} placeholder="5" value={royalties} onChange={(e) => setRoyalties(e.target.value)}/>
                    <small className="form-text text-muted" >Whenever someone sells your NFT you get this share.</small>
                </div>

                <div className="form-group lastFormGroup">
                    <label>*Royaltie Receiver:</label>
                    <input type="text" className="form-control" required placeholder="0x0606F686064a520e58bA1CBf151c67b8EE183866" value={royaltieReciever} onChange={(e) => setRoyaltieReceiver(e.target.value)}/>
                    <small className="form-text text-muted">The address where the royalties are sent to.</small>
                </div>

                <input type="submit" className='btn btn-dark'/>

            </form>

            <p>Status: {status}</p>

        </div>
    )
}