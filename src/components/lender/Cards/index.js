import React from "react";
import { useState, useEffect } from "react";
import "./style.css";

import condo from "../../images/condo.jpg";
import {
  loanProfileContract,
  readCollectedAmount,
  readLoanAmount,
  userDeposit,
  getCurrentWalletConnected,
} from "../../interact";

const Cards = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [collectedAmount, setCollectedAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("30");

  function collectedAmountListener() {
    loanProfileContract.events.updatedCollectedAmount({}, (error, data) => {
      if (error) {
        console.log(error.message);
      } else {
        setCollectedAmount(data.returnValues[0]);
      }
    });
  }

  useEffect(() => {
    async function fetchData() {
      const loan = await readLoanAmount();
      setLoanAmount(loan);
      const collected = await readCollectedAmount();
      setCollectedAmount(collected);
      const { address } = await getCurrentWalletConnected();
      setWalletAddress(address);
      console.log(walletAddress);
    }
    fetchData();
  }, []);

  useEffect(() => {
    collectedAmountListener();
  }, [userDeposit]);

  return (
    <div className="main">
      <h1 className="header">Loan Profile</h1>

      <ul className="cards">
        {/* 1 */}
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={condo} />
            </div>
            <div className="card_content">
              <h2 className="card_title">Property Name</h2>
              <p className="card_text">{loanAmount}</p>
              <div className="progress">
                <div className="bar">
                  <p className="percent">35%</p>
                </div>
              </div>
              <button type="submit" className="btn card_btn">
                <input
                  type="number"
                  className="input"
                  placeholder="Enter an Amount"
                />
                Lend Now
              </button>
            </div>
          </div>
        </li>

        {/* 2 */}

        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={condo} />
            </div>
            <div className="card_content">
              <h2 className="card_title">Property Name</h2>
              <p className="card_text">Amount Pledged</p>
              <div className="progress">
                <div className="bar">
                  <p className="percent">35%</p>
                </div>
              </div>
              <button type="submit" className="btn card_btn">
                <input
                  type="number"
                  className="input"
                  placeholder="Enter an Amount"
                />
                Lend Now
              </button>
            </div>
          </div>
        </li>
        {/* 3 */}
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={condo} />
            </div>
            <div className="card_content">
              <h2 className="card_title">Property Name</h2>
              <p className="card_text">Amount Pledged</p>
              <div className="progress">
                <div className="bar">
                  <p className="percent">35%</p>
                </div>
              </div>
              <button type="submit" className="btn card_btn">
                <input
                  type="number"
                  className="input"
                  placeholder="Enter an Amount"
                />
                Lend Now
              </button>
            </div>
          </div>
        </li>

        {/* 4 */}
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={condo} />
            </div>
            <div className="card_content">
              <h2 className="card_title">Property Name</h2>
              <p className="card_text">Amount Pledged</p>
              <div className="progress">
                <div className="bar">
                  <p className="percent">35%</p>
                </div>
              </div>
              <button type="submit" className="btn card_btn">
                <input
                  type="number"
                  className="input"
                  placeholder="Enter an Amount"
                />
                Lend Now
              </button>
            </div>
          </div>
        </li>
        {/* 5 */}
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={condo} />
            </div>
            <div className="card_content">
              <h2 className="card_title">Property Name</h2>
              <p className="card_text">Amount Pledged</p>
              <div className="progress">
                <div className="bar">
                  <p className="percent">35%</p>
                </div>
              </div>
              <button type="submit" className="btn card_btn">
                <input
                  type="number"
                  className="input"
                  placeholder="Enter an Amount"
                />
                Lend Now
              </button>
            </div>
          </div>
        </li>
        {/* 6 */}
        <li className="cards_item">
          <div className="card">
            <div className="card_image">
              <img src={condo} />
            </div>
            <div className="card_content">
              <h2 className="card_title">Property Name</h2>
              <p className="card_text">Amount Pledged</p>
              <div className="progress">
                <div className="bar">
                  <p className="percent">35%</p>
                </div>
              </div>
              <button type="submit" className="btn card_btn">
                <input
                  type="number"
                  className="input"
                  placeholder="Enter an Amount"
                />
                Lend Now
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cards;
