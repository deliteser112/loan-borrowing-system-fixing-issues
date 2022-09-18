const Contract = require('web3-eth-contract');
const Web3 = require('web3')
const loan = require('../contracts/LoanProfile.json')
const Usdc = require('../contracts/USDCInterface.json');
const ALCHEMY_API = 'https://eth-goerli.g.alchemy.com/v2/Zl0NHp_DT9kWIHiYsRyx3SEHtrDHyl5x';
const web3 = new Web3(new Web3.providers.HttpProvider(ALCHEMY_API))

const usdcContractAddress = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F";
let loanContractAddress = "0x668B036c6a8e119dEE8127C21EdB15C703956A15";
export let loanProfileContract = new web3.eth.Contract(loan.abi, loanContractAddress)
export const USDCContract = new web3.eth.Contract(Usdc.abi, usdcContractAddress)




export const readCollectedAmount = async (props) => {
    const contract = new web3.eth.Contract(loan.abi, props.address)
    const collected = await contract.methods.collectedAmount().call();
    return collected
}
export const readLoanAmount = async (props) => {
    const contract = new web3.eth.Contract(loan.abi, props.address)
    const amount = await contract.methods.loanAmount().call();
    return amount
}


export const userDeposit = async (address, amount) => {

    // input error handling
    if (!window.ethereum || address === null) {
        return {status: "💡 Connect your Metamask wallet to stake in the Loan"};
    }

    // set up transaction parameters
    const transactionParameters = {
        to: loanContractAddress, // Required except during contract publications.
        from: address, // must match user's active address.
        data: loanProfileContract.methods.deposit(amount)
    };

    // sign the transaction
    try {
        const txHash = await window.ethereum.request({method: "eth_sendTransaction", params: [transactionParameters]});
        return {status: ("correcto")};
    } catch (error) {
        return {
            status: "😥 " + error.message
        };
    }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({method: "eth_accounts"});
            if (addressArray.length > 0) {
                return {address: addressArray[0]}
            }
        } catch (err) {
            console.log('error getting wallet add:' + err.message);
        }
    }
}


export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({method: "eth_requestAccounts"});

            return addressArray[0]
        } catch (err) {
            return {address: ""};
        }
    }
};


export const depositUSD = async (address, amount) => {
    try {
        const accounts = await web3.eth.getAccounts();

        let request = await USDCContract.methods.approve(loanContractAddress, web3.utils.toWei(amount, 'ether')).send({from: accounts[0]});
        request = await loanProfileContract.methods.deposit(web3.utils.toWei(amount, 'ether')).send({from: accounts[0]});

        alert('successfully deposit to loan contract');
        console.log(request);
    } catch (err) {
        console.log(err);
        alert('deposit failed')
    }
}
