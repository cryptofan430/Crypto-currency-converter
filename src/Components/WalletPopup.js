import classes from './WalletPopup.module.scss';
import React, { useEffect, useState } from 'react';
import {IoClose} from "react-icons/io5";
import { useWeb3React} from "@web3-react/core";
import { injected } from "./Wallet/Connectors";
const web3 = require("web3");

const WalletPopup = (props)=>{

const { active, account, chainId, library, activate, deactivate } = useWeb3React()


  async function connect() {
    try {
      await activate(injected)
      setNoConnection((p)=>!p);
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
      if (account && library?.eth) {
        library?.eth.getBalance(account)
        .then((balance) => {
            setBalance(web3.utils.fromWei(balance))
        })
        .catch(() => {
            setBalance(null)
        })
    }
  }, [library,account])

  async function disconnect() {
    try {
      await deactivate(injected);
      setNoConnection((p)=>!p);
    } catch (ex) {
      console.log(ex)
    }
  }

    const [noConnection , setNoConnection] = useState(!active);
    const [balance ,setBalance] = useState(null);
    const [errorMessage , setErrorMessage] = useState(`Wallet not connected. Please click "Connect" button below.`)

    return(
        <div className={classes.walletPopup} onClick={props.onCancelHandler}>
            <div className={classes.walletPopup__content} onClick={(event)=>event.stopPropagation()}>
                <div className={classes.walletPopup__content__header}>
                    <h2>Wallet Detail</h2>
                    <IoClose onClick={props.onCancelHandler}/>
                </div>
                {noConnection && <p>{errorMessage}</p>}
                {noConnection && <div className={classes.walletPopup__content__footer}>
                    <button className={classes.walletPopup__content__footer__connect} onClick={connect}>Connect</button>
                    <button className={classes.walletPopup__content__footer__cancel} onClick={props.onCancelHandler}>Cancel</button>
                </div> }

                {!noConnection && <div className={classes.walletPopup__content__wallet}>
                    <ul>
                        <li><span>KEY</span><span>VALUE</span></li>
                        <li><span>ACCOUNT</span><span>{account}</span></li>
                        <li><span>Chain Id</span><span>{chainId}</span></li>
                        <li><span>Balance</span><span>{balance}</span></li>
                    </ul> 
                    <p>Wallet Details</p> 
                    <button onClick={disconnect}>Disconnect</button>  
                </div>}
            </div>
        </div>
    );
}

export default WalletPopup;