import { useEffect, useState } from "react";

// USEDAPP
import {useEthers, useContractFunction, useCall, ERC20Interface} from '@usedapp/core'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { Falsy } from "@usedapp/core/dist/esm/src/model/types";

// ABI & TOKEN ADDRESS
import { erc721Interface } from '../contract-data/ABI';
import { ERC721address } from '../contract-data/ContractAddress';

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

function GetUriOfToken(props) {
    const {value, error} = 
        useCall(
            {
                contract: new Contract(ERC721address, erc721Interface),
                method: "tokenURI",
                args: [props.tokenID]

            }
        ) ?? {};
        if(error) {
          console.error(error.message)
          return undefined
        }
        return value?.[0].toString()
}

function TokenInformationEncapsulated(props) {
  const {value, error} = 
     useCall(
      {
          contract: new Contract(ERC721address, erc721Interface),
          method: "tokenOfOwnerByIndex",
          args: [props.owner, props.index]
      }
    )

    console.log(value + " This is the tokenID")
    
    return(value)
}


export const Gallery = () => {

    
    var ownedNFTs = []
    var tokenURIs = []

    function TokenOfOwnerByIndex(
      props
      ) {
          const { value, error } = 
              useCall(
                  {
                      contract: new Contract(ERC721address, erc721Interface),
                      method: "tokenOfOwnerByIndex",
                      args: [props.owner, props.index]
                  }
              ) ?? {};
              if(error) {
                console.error(error.message)
                return undefined
              }
              ownedNFTs.push(value?.[0].toString())
              return value?.[0].toString()
      }
  
    const {account} = useEthers();

    // get the number of tokens a user has
    const tokenBalance = useTokenBalance(account)

    // get the token IDs of the tokens that the owner owns
    for(let i = 0; i < tokenBalance; i++) {
        // const tokenIndex = <TokenOfOwnerByIndex owner={account} index={i} />
      <TokenInformationEncapsulated owner={account} index={i} />
    }

    for(let i = 0; i < ownedNFTs.length; i++) {
        console.log(<GetUriOfToken tokenID={ownedNFTs[i]} />)
    }

    return(
        <div className="container frame">
            <h1>Your Treespace NFTs</h1>
            <p>You're  holding <strong>{tokenBalance} Tokens</strong>  so far.</p>
            {ownedNFTs}
        </div>
    );
}