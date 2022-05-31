// USEDAPP
import { useEthers } from "@usedapp/core";


export const Connect = () => {

    const {account, activateBrowserWallet, deactivate} = useEthers()
    const isConnected = account !== undefined
  
    return(
        <div>
        
        {isConnected ? (
            <button className="btn green"
                onClick={deactivate}>
                Disconnect
            </button>
    
            ) : (

            <button className="btn green"
                onClick={() => activateBrowserWallet()}>
                Connect
            </button>
            )
        }

        </div>
    );
}
