import { useEffect, useState } from "react";

// USEDAPP
import {useEthers, useContractFunction, useCall, ERC20Interface} from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { Falsy } from "@usedapp/core/dist/esm/src/model/types";

// ABI & TOKEN ADDRESS
import { erc721Interface } from '../contract-data/ABI';
import { ERC721address } from '../contract-data/ContractAddress';

// COMPONENTS
import {MintedNFTs} from '../Components/MintedNFTs'

function useTokenBalance(
    address: string | Falsy
  ) {
    const { value, error } =
      useCall(
        address &&
        ERC721address && {
            contract: new Contract(ERC721address, erc721Interface), // instance of called contract
            method: "balanceOf", // Method to be called
            args: [address], // Method arguments - address to be checked for balance
          }
      ) ?? {};
    if(error) {
      console.error(error.message)
      return undefined
    }
    return value?.[0].toString() 
  }

export const Gallery = () => {

  
    const {account} = useEthers();

    // get the number of tokens a user has
    const tokenBalance = useTokenBalance(account)

    return(
        <div className="container frame">
            <h1>Your Treespace NFTs</h1>
            <p>You're  holding <strong>{tokenBalance} Tokens</strong>  so far.</p>
            <MintedNFTs />
        </div>
    );
}