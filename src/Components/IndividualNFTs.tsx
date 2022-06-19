import { useEffect, useState } from "react";
import {Link} from "react-router-dom"

export const IndividualNfts = (props) => {
    const [uriData, setURIData] = useState({});

      useEffect (() => {
        fetch("/tokenFormatter/" + props.data).then((res) =>
            res.json().then((data) => {
                setURIData(data);
            })
        );
        }, []); 

    console.log(uriData["image"])
    
    if(uriData["image"] == undefined) {
        return(
            <div className="col-sm-3 small-box-frame">
                <p>No data found...</p>
            </div>
        ) 
    } else {

        return(
            <Link to={"/nft/" + props.data} className="col-sm-3 small-box-frame">
                <img className="individualNFT" src={uriData["image"]}/>
                <h4 className="individualwalletname">{uriData["name"]}</h4>
            </Link>
        )
    }

}