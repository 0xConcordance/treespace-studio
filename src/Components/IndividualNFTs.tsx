import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

export const IndividualNfts = (props) => {
    const [uriData, setURIData] = useState({});

      useEffect (() => {

        axios({
            method: "GET",
            url: "/tokenFormatter/" + props.data
        }).then((res) => {
            setURIData(res.data);
        })

        /*
        fetch("/tokenFormatter/" + props.data, {mode:"cors"}).then((res) =>
            res.json().then((data) => {
                setURIData(data);
            })
        );
            */ 
        }, []); 
    
    if(uriData["image"] == undefined) {
        return(
            <div className="col-sm-3 small-box-frame">
                <video autoPlay loop width={50} height={50} className="wallet-loading-screen">    
                        <source src="/animations/full-logo-animation.mp4" type="video/mp4"/>
                </video>                
            </div>
        ) 
    } else {

        return(
            <Link to={"/nft/" + props.data} className="col-sm-3 small-box-frame">
                <img className="individualNFT" src={uriData["image"]}/>
                <p>ID {props.data}</p>
                <h4 className="individualwalletname">{uriData["name"]}</h4>
            </Link>
        )
    }

}