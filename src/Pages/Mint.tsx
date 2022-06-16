// REACT 
import { useState } from "react";

// USEDAPP
import {useEthers, useContractFunction} from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'

// ABI & TOKEN ADDRESS
import { erc721Interface } from '../contract-data/ABI';
import { ERC721address } from '../contract-data/ContractAddress';


export const Mint = () => {
    
    const [uri, setUri] = useState("");
    const {account} = useEthers();

    const contract = new Contract(ERC721address, erc721Interface)
    const { state, send } = useContractFunction(contract, 'mint', {transactionName: 'mint'})
    const { status } = state

    const sendTransaction = (uri) => {
        send(uri)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendTransaction(uri)

      }
    
    return(
        <div className="frame container">
            <h1>Mint an NFT</h1>
            <p>Mint a new NFT using the concord ERC721 contract.</p>

            <form onSubmit={handleSubmit}>
                <label>Token URI:</label>
                <input type="text" value={uri} onChange={(e) => setUri(e.target.value)}/>
                <input type="submit" className='btn btn-dark'/>
            </form>
            <p>Status: {status}</p>


        </div>
    )
}