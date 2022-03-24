import classes from './Card.module.scss';
import React, { useState } from 'react';
import {BsArrowDownUp} from 'react-icons/bs';

const Card = (props)=>{
    const[NEP,setNEP] = useState('');
    const[BUSD,setBUSD] = useState('');

    const convertToBUSD = (event)=>{
        setNEP(event.target.value);
        const num = event.target.value;
        const convertedNum = (num*3).toFixed(2); 
        setBUSD(convertedNum);
    }

    const convertToNEP = (event)=>{
        setBUSD(event.target.value);
        const num = event.target.value;
        const convertedNum = (num/3).toFixed(2); 
        setNEP(convertedNum);
    }
    return(
        <div className={classes.card}>
            <h2>Crypto Converter</h2>
            <form className={classes.card__form}>
                <div className={classes.card__form__input}>
                    <label>NEP</label>
                    <input type="number" min="0.00" value={NEP} step="1" placeholder="0.00" onChange={convertToBUSD}/>
                </div>
                <BsArrowDownUp/>
                <div className={classes.card__form__input}>
                    <label>BUSD</label>
                    <input type="number" min="0.00" value={BUSD} step="1" placeholder="0.00" onChange={convertToNEP}/>
                </div>
            </form>
            <button onClick={props.onClick}>Check Wallet Details</button>
        </div>
    );
}

export default Card;