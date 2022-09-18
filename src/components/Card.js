import React from "react";
import { useState, useEffect } from "react";
import "./lender/Cards/style.css";
import {readLoanAmount, userDeposit} from "./interact";

import {Progress} from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

import CurrencyFormat from "react-currency-format";

const Web3 = require("web3");
const loan = require("../contracts/LoanProfile.json");
const homecrowdToken = require("../contracts/HomeCrowdToken.json");
const tokenUSDC = require("../contracts/USDCInterface.json");
const ALCHEMY_API = "https://eth-goerli.g.alchemy.com/v2/Zl0NHp_DT9kWIHiYsRyx3SEHtrDHyl5x";
const web3 = new Web3(new Web3.providers.HttpProvider(ALCHEMY_API, {
    headers: [
        {
            name: 'Access-Control-Allow-Origin',
            value: ALCHEMY_API
        }
    ]
}));
export default function Card(props) {
    let {
        deposit,
        refund,
        image,
        name,
        loanAmount,
        contractAddress,
        timePeriod,
        timeCreated
    } = props;

    const [collectedAmount, setCollectedAmount] = useState(2);
    const [percentage, setPercentage] = useState(0);
    const [investedAmount, setInvestedAmount] = useState(0);
    const [show, setShow] = useState(true);

    const handleChange = (e) => {
        setInvestedAmount(e.target.value)
    }

    const load = async () => {
        // if (contractAddress === "") {
        //     contractAddress = "0x5099781962F051FadD910f2399F6593b5f572C06";
        // }
        let contract = new web3.eth.Contract(loan.abi, contractAddress)
        contract.options.address = contractAddress

        const amount = await contract.methods.collectedAmount().call();
        setCollectedAmount(amount)
        //Show refund button
        // setShow((parseInt(timeCreated/1000) + timePeriod) > parseInt(new Date().getTime()/1000));
    }


    useEffect(() => {
        load();
    }, []);


    useEffect(() => {
        const percentage = (collectedAmount / (loanAmount * 1000000)) * 100;
        const cleanPercentage = parseFloat(percentage.toFixed(2));
        setPercentage(cleanPercentage)
    }, [collectedAmount, loanAmount]);

    return (

        <li className="cards_item">
            <div className="card">
                <div className="card_image">
                    <img className="prop-img"
                        src={image}/>
                </div>
                <div className="card_content">
                    <h2 className="card_title">{name}</h2>
                    <CurrencyFormat value={loanAmount}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"SGD"}/> {/* <p className="card_text">{loanAmount}</p> */}
                    {
                    show ? <div><Progress percent={percentage}
                            style={
                                {padding: "10px 0 20px 0"}
                            }/>
                        <input onChange={
                                (e) => handleChange(e)
                            }
                            value={percentage}
                            type="number"
                            className="input"
                            placeholder="Enter an Amount"/>
                        <button type="submit" className="btn card_btn"
                            onClick={
                                () => {
                                    deposit(contractAddress, investedAmount)
                                }
                        }>
                            Lend Now
                        </button>
                    </div> : <div>
                        <button type="submit" className="btn card_btn"
                            onClick={
                                () => {
                                    refund(contractAddress, collectedAmount)
                                }
                        }>
                            Refund
                        </button>
                    </div>
                } </div>
            </div>
        </li>


    );
}
