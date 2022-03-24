import classes from './Home.module.scss';
import React,{ useState } from 'react';
import Card from '../Components/Card';
import WalletPopup from '../Components/WalletPopup';

const Home = ()=>{
    const [showWalletPopup,setShowWalletPopup] = useState(false);

    const walletPopupHandler= ()=>{
        setShowWalletPopup((p)=>!p);
    }
    return(
        <div className={classes.home}>
            <div className={classes.home__logo}>
                <img src={process.env.PUBLIC_URL + "/images/Logo.png"} alt="Neptune Logo"/>
                <h1>NEPTUNE MUTUAL</h1>
            </div>
            <Card onClick={walletPopupHandler}/>
            {showWalletPopup && <WalletPopup onCancelHandler={walletPopupHandler}/>}
        </div>
    );
}

export default Home;