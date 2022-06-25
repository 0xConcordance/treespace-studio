// STYLES
import { useEthers } from '@usedapp/core';
import '../styles/Home.css'

export const Dashboard = () => {
    const {account} = useEthers();

    return(
        <div className="frame">
            {account ? (
            <h1>Welcome, {account.slice(0, 4)}..{account.slice(39, 42)}</h1>
                ) : (
                    <h1>Welcome, Connect Your Wallet to get started</h1>
                )}
            
            <p>Manage your NFTs across the Treespace Ecosystem.</p>
            
        </div>
    );
}