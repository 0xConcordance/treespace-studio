import {Connect} from '../Components/Connect'

export const NotConnected = () => {

    return(
        <div className="container">
            <h1>Welcome to Treespace Studio</h1>
            <p>Please your Wallet to get started</p>
            <Connect />
        </div>
    );
}