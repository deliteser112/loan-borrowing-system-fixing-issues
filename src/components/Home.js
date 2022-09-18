import Cards from "./lender/Cards";
import {useEffect, useState} from "react";
import image from "./images/HC_Logo_square.png";
import {readCollectedAmount, readLoanAmount, userDeposit} from "./interact";
import condo1 from "./images/condo.jpg";
import condo2 from "./images/condo2.jpg";
import condo3 from "./images/condo3.jpg";
import condo4 from "./images/condo4.jpg";
import Card from ".//Card";
import {Progress} from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import SidebarLender from "./lender/sidebarlender";
import Navbar from "./lender/Navbar";
import CurrencyFormat from "react-currency-format";
import { ConstructionOutlined } from "@mui/icons-material";
// import borrower from "./borrower/borrowerHome";

const Web3 = require("web3");
const loan = require("../contracts/LoanProfile.json");
const homecrowdToken = require("../contracts/HomeCrowdToken.json");
const tokenUSDC = require("../contracts/USDCInterface.json");
const ALCHEMY_API = "wss://eth-goerli.g.alchemy.com/v2/Zl0NHp_DT9kWIHiYsRyx3SEHtrDHyl5x";
const web3 = new Web3(new Web3.providers.HttpProvider(ALCHEMY_API));

const loanContractAddress = "0xe1dBF785115138c4268fABc8673183C6503AC279";
const homeCrowdTokenAddress = "0xeFcA6C3cc694A9a4F31AB98ff9bb4d6abe7a5F48";
const usdcContractAddress = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";
const Home = () => {
    const condo =  [condo1,condo2,condo3,condo4];

    const [currentAccount, setCurrentAccount] = useState(null);
    const [loanContract, setLoanContracts] = useState([{
            contractAddress: '',
            loanId: 0,
            collectedAmount: 0,
            timePeriod: 0,
            loanAmount: 0,
            timeCreated: 0
        }]);



    function strtodec(amount, dec) {
        var stringf = "";
        for (var i = 0; i < dec; i++) {
            stringf = stringf + "0";
        }
        return amount + stringf;
    }


    const connectWalletButton = () => {
        return (
            <button onClick={connectWalletHandler}
                type="button"
                className="button">
                Connect Wallet
            </button>
        );
    };

    const checkWalletIsConnected = () => {
        const {ethereum} = window;

        if (!ethereum) {
            console.log("Make sure you have Metamask installed!");
            return;
        } else {
            console.log("Wallet exists! We're ready to go!");
        }
    };

    const connectWalletHandler = async () => {
        const {ethereum} = window;
        if (!ethereum) {
            alert("Please install Metamask!");
        }

        try {
            const accounts = await window.ethereum.request({method: "eth_requestAccounts"});

            console.log("Found an account! Address: ", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (err) {
            console.log(err);
        }
    };

    const deposit = async (loanContractAddress, investedAmount) => {
        try {
            const {ethereum} = window;
            // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // setCurrentAccount(accounts[0])
            const web3 = new Web3(ethereum);
            const usdcContract = new web3.eth.Contract(tokenUSDC.abi, usdcContractAddress);
            const loanProfileContract = new web3.eth.Contract(loan.abi, loanContractAddress);

            var tempInvestedAmount = strtodec(investedAmount, '6');
            // var tempInvestedAmount = investedAmount;
            // This fixed "no sender address" error
            let request = await usdcContract.methods.approve(loanContractAddress, tempInvestedAmount)
            .send({
                from: currentAccount
            });
            
            let transfer = await loanProfileContract.methods.deposit(tempInvestedAmount)
            .send({
                from: currentAccount
            });
            // let transfer = await loanProfileContract.methods.deposit(web3.utils.toWei(investedAmount, 'ether')).send({ from : currentAccount});

            alert('deposit successful')
            // setPercentage(40)
            console.log(request);
            console.log(transfer);
        } catch (err) {
            console.log(err);
            alert("deposit failed");
        }
    };


    const refund = async (loanContractAddress, _amount) => {
        try {
            const {ethereum} = window;
            // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // setCurrentAccount(accounts[0])
            const web3 = new Web3(ethereum);
            const loanProfileContract = new web3.eth.Contract(loan.abi, loanContractAddress);
            const homeCrowdContract = new web3.eth.Contract(homecrowdToken.abi, homeCrowdTokenAddress);
            const usdcContract = new web3.eth.Contract(tokenUSDC.abi, usdcContractAddress);

            let request = await homeCrowdContract.methods.approve(loanContractAddress, _amount).send({
                from: currentAccount
            });
            
            let transfer = await loanProfileContract.methods.refund().send({
                from: currentAccount,
                value: _amount
            })
            // let transfer = await loanProfileContract.methods.deposit(web3.utils.toWei(investedAmount, 'ether')).send({ from : currentAccount});

            alert('deposit successful')
            // setPercentage(40)
            console.log(request);
            console.log(transfer);
        } catch (err) {
            console.log(err)
            alert("deposit failed");
        }
    };

    const getLoanAmount = async () => {
        try {
            const {ethereum} = window;
            // const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // setCurrentAccount(accounts[0])
            const web3 = new Web3(ethereum);
            const loanProfileContract = new web3.eth.Contract(loan.abi, loanContractAddress);
            
            let loanAmount = await loanProfileContract.methods.loanAmount().call()


        } catch {

        }
    }

    // const getAmount = async () => {
    //     for (let i = 0; i < loanContract.length; i++) {
    //         let id = loanContract[i].loanId;
    //         await fetch('http://localhost:5002/loan/getloan/' + id).then((response) => response.json()).then((data) => {
    //             loanContract[i]["loanAmount"] = data[0].amount;
    //         }).catch((err) => {
    //             console.log(err.message);
    //         });
    //     }
    // };
    const fetchData = async () => {
        await fetch('https://lit-reef-14615.herokuapp.com/loan/contracts').then((response) => response.json().then((data) => {
            setLoanContracts(data);
            console.log(data);
        }).catch((err) => {
            console.log(err.message)
        }))
    };

    useEffect(() => {
        checkWalletIsConnected();
        fetchData();
    }, []);

    const renderCard = () => { // Ignore the first iteration
        return loanContract.map((val, key) => <Card key={key}
            image={condo[key%4]}
            name={"Mortgage "+(key+1)}
            deposit={deposit}
            refund={refund}
            loanAmount={
                val.loanAmount
            }
            contractAddress={
                val.contractAddress
            }

            timePeriod={
                val.timePeriod
            }
            timeCreated={
                val.timeCreated
            }/>);
    }
    return (
        <div>
            <SidebarLender/>
            <div id="navbar">               
             <nav className="nav" style={{ 
                 backgroundColor:"white",
                 marginLeft:"20%",
                 width : "80%",
                 borderBottom : "1px solid rgb(225,225,225)"
             }}>
                    {/* <img src={image}
                        className="logo"/> */}
                    <h1 className="brand">DeFi Mortgage</h1>
                    <div> {
                        currentAccount ? (
                            <p style={
                                {
                                    color: "#D4A357",
                                    marginRight: "1rem",
                                    backgroundColor: "#585757",
                                    padding: "0.6rem",
                                    fontSize: "15px",
                                    fontWeight: "bold"
                                }
                            }>
                                {currentAccount} </p>
                        ) : (connectWalletButton())
                    } </div>
                    {/* <a href="" target="_blank" className="nav__link"> */}

                    {/* </a>   */} </nav>

            </div>
          

            <div id="cards" className="main">
                <h1 className="header">Loan Profile</h1>
                <ul className="cards">
                    {
                    renderCard()
                } </ul>
            </div>
           </div>
    );
};

export default Home;
