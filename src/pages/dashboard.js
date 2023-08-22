import React, { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Simple from "@/components/base/Simple";
import Image from "next/image";
import Link from "next/link";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from '@/context/AppContext';

import { ethers } from 'ethers'; // Import ethers.js library

const contractAbi1 = [{ "inputs": [{ "internalType": "address payable", "name": "initial_LiqFee_Address", "type": "address" }, { "internalType": "address payable", "name": "initial_MktFee_Address", "type": "address" }, { "internalType": "address", "name": "uniswapRouterAddress", "type": "address" }, { "internalType": "uint256", "name": "buy_LiqFee", "type": "uint256" }, { "internalType": "uint256", "name": "buy_BingoFee", "type": "uint256" }, { "internalType": "uint256", "name": "buy_MktFee", "type": "uint256" }, { "internalType": "uint256", "name": "sell_LiqFee", "type": "uint256" }, { "internalType": "uint256", "name": "sell_BingoFee", "type": "uint256" }, { "internalType": "uint256", "name": "sell_MktFee", "type": "uint256" }, { "internalType": "uint256", "name": "intTotalSupply", "type": "uint256" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "extraAmount", "type": "uint256" }], "name": "BingoPlusReleased", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "randomNumber", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "wallet", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "prizeAmount", "type": "uint256" }], "name": "BingoWinner", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newLiqFee", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBingoFee", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newMktFee", "type": "uint256" }], "name": "BuyFeesUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "newLiqFee", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBingoFee", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newMktFee", "type": "uint256" }], "name": "SellFeesUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "pair", "type": "address" }, { "indexed": true, "internalType": "bool", "name": "value", "type": "bool" }], "name": "SetAutomatedMarketMakerPair", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "newAddress", "type": "address" }, { "indexed": true, "internalType": "address", "name": "oldAddress", "type": "address" }], "name": "UpdateUniswapV2Router", "type": "event" }, { "inputs": [], "name": "_BingoPlusExecuteAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_addedHolderList", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_bingoContract", "outputs": [{ "internalType": "contract Bingo", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_bingoExecuteAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_bingoRound", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buy_BingoFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buy_LiqFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buy_MktFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_buy_totalFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "_holderIndexes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "_listOfHolders", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_minAmountToParticipate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_sell_BingoFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_sell_LiqFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_sell_MktFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_sell_totalFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_swapState", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "automatedMarketMakerPairs", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "state", "type": "bool" }], "name": "excludeFromBingo", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "bool", "name": "state", "type": "bool" }], "name": "excludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromBingo", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromFee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lotteryParticipantsAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "lotoNumber", "type": "uint256" }], "name": "lotteryWinnerInfo", "outputs": [{ "components": [{ "internalType": "uint256", "name": "randomNumber", "type": "uint256" }, { "internalType": "address", "name": "wallet", "type": "address" }, { "internalType": "uint256", "name": "prizeAmount", "type": "uint256" }], "internalType": "struct BaseBingo._winnerInfoStruct", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "pickingWinnerStateFix", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "shareholder", "type": "address" }], "name": "removeHolder", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pair", "type": "address" }, { "internalType": "bool", "name": "value", "type": "bool" }], "name": "setAutomatedMarketMakerPair", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAddress", "type": "address" }], "name": "setLiqFeeAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAddress", "type": "address" }], "name": "setMktFeeAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "setSwapTokensAtAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "state", "type": "bool" }], "name": "setswapState", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address payable", "name": "addr", "type": "address" }], "name": "updateBingoContractAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "updateBingoExecuteAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "updateBingoMinTokensAmount", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newLiqFee", "type": "uint256" }, { "internalType": "uint256", "name": "newBingoFee", "type": "uint256" }, { "internalType": "uint256", "name": "newMktFee", "type": "uint256" }], "name": "updateBuyFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "newLiqFee", "type": "uint256" }, { "internalType": "uint256", "name": "newBingoFee", "type": "uint256" }, { "internalType": "uint256", "name": "newMktFee", "type": "uint256" }], "name": "updateSellFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newAddress", "type": "address" }], "name": "updateUniswapV2Router", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }];
const contractAbi2 = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "depositFounds",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "reciever",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "rewardSent",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "setTokenAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalRewardsGiven",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "reciever",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];
export default function Data() {
  const { account } = useContext(AppContext);
  const copyToClipboard = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
    } catch (error) {
      console.error("Error copying text to clipboard:", error);
    }
  };
  const [contractAddress2, setContractAddress2] = useState('0xaeaaEc377882436829349C95a0d16654456fd772');
  const [totalRewardsGiven, setTotalRewardsGiven] = useState(ethers.BigNumber.from(0));
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress1 = '0x17528572ffa56c5d7784f414923faa8427ac75a8'; // Replace with the actual contract address
  const [lotteryRound, setLotteryRound] = useState('');
  const [lotteryParticipantsAmount, setLotteryParticipantsAmount] = useState('');
  const [lotteryExecuteAmount, setLotteryExecuteAmount] = useState('');
  const [latestWinnerWallet, setLatestWinnerWallet] = useState('');
  const [latestWinnerAmount, setLatestWinnerAmount] = useState('');
  const [minAmountToParticipate, setMinAmountToParticipate] = useState('');
  const [walletBalance, setWalletBalance] = useState('Retrieving...');
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [lotteryStatus, setLotteryStatus] = useState('Loading...');
  const provider = new ethers.providers.JsonRpcProvider("https://mainnet.base.org");
  const contract1 = new ethers.Contract(contractAddress1, contractAbi1, provider);
  const [currentLotteryRound, setCurrentLotteryRound] = useState(0);

useEffect(() => {
  async function fetchCurrentLotteryRound() {
    
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        const provider = new ethers.providers.JsonRpcProvider("https://mainnet.base.org");
        const contract1 = new ethers.Contract(contractAddress1, contractAbi1, provider);

        const fetchedLotteryRound = await contract1._bingoRound();
        setCurrentLotteryRound(fetchedLotteryRound.toNumber());
      }
    } catch (error) {
      console.error('Error fetching current lottery round:', error);
    }
  }

  fetchCurrentLotteryRound();
}, [contractAddress1]);

useEffect(() => {
  async function fetchWinnerInfo() {
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        const provider = new ethers.providers.JsonRpcProvider("https://mainnet.base.org");
        const contract1 = new ethers.Contract(contractAddress1, contractAbi1, provider);

        const lastTenRounds = Math.max(currentLotteryRound - 10, 1);
        const fetchedWinnerInfo = [];

        for (let round = lastTenRounds; round <= currentLotteryRound; round++) {
          const winnerInfo = await contract1.lotteryWinnerInfo(round);
          fetchedWinnerInfo.push({
            round: round,
            wallet: winnerInfo.wallet || 'N/A',
            prizeAmount: winnerInfo.prizeAmount
              ? Number(ethers.utils.formatEther(winnerInfo.prizeAmount)).toFixed(4).toString()
              : 'N/A'
          });
        }

        setWinnerInfo(fetchedWinnerInfo);
      }
    } catch (error) {
      console.error('Error fetching winner info:', error);
      setWinnerInfo([]); // Set winnerInfo to an empty array in case of an error
    }
  }

  fetchWinnerInfo();
}, [currentLotteryRound]);











  useEffect(() => {
    async function fetchData() {
      try {
        if (typeof window !== 'undefined' && window.ethereum) {
          const provider = new ethers.providers.JsonRpcProvider("https://mainnet.base.org");
          const contract1 = new ethers.Contract(contractAddress1, contractAbi1, provider);
          const contract2 = new ethers.Contract(contractAddress2, contractAbi2, provider);
  
          console.log('Fetching latest winner info...');
          setLatestWinnerWallet('Retrieving...');
          setLatestWinnerAmount('Retrieving...');
          console.log('Fetching lotteryExecuteAmount...');
          setLotteryExecuteAmount('Retrieving...');
          console.log('Fetching total rewards...');
          setTotalRewardsGiven('Retrieving...');
          console.log('Fetching lottery round...');
          setLotteryRound('Retrieving...');
          console.log('Fetching minAmountToParticipate...');
          setMinAmountToParticipate('Retrieving...');
          console.log('Fetching lotteryParticipantsAmount...');
          setLotteryParticipantsAmount('Retrieving...');
  
          // Fetch latest winner info
          const latestRound = await contract1._bingoRound();
          const winnerInfo = await contract1.lotteryWinnerInfo(latestRound);
          setLatestWinnerWallet(winnerInfo.wallet || 'N/A');
          setLatestWinnerAmount(
            winnerInfo.prizeAmount
              ? Number(ethers.utils.formatEther(winnerInfo.prizeAmount)).toFixed(4).toString()
              : 'N/A'
          );
          console.log('Latest winner info fetched.');
  
          // Fetch lotteryExecuteAmount
          const lotteryExecuteAmountWei = await contract1._bingoExecuteAmount();
          const lotteryExecuteAmountEther = ethers.utils.formatEther(lotteryExecuteAmountWei);
          setLotteryExecuteAmount(lotteryExecuteAmountEther);
          console.log('LotteryExecuteAmount fetched.');
  
          // Set fixed amount to lotteryExecuteAmountEther
          const fixedAmount = parseFloat(lotteryExecuteAmountEther);
  
          // Fetch total rewards
          const rewardsInWei = await contract2.totalRewardsGiven();
          const rewardsInEth = ethers.utils.formatEther(rewardsInWei);
          setTotalRewardsGiven(rewardsInEth);
          console.log('Total rewards fetched.');
  
          // Fetch lottery round
          const fetchedLotteryRound = await contract1._bingoRound();
          setLotteryRound(fetchedLotteryRound.toString());
          console.log('Lottery round fetched.');
  
          // Fetch minAmountToParticipate
          const minAmountWei = await contract1._minAmountToParticipate();
          const minAmountEther = ethers.utils.formatEther(minAmountWei);
          const minAmountInteger = parseInt(minAmountEther);
          setMinAmountToParticipate(minAmountInteger);
          console.log('MinAmountToParticipate fetched.');
  
          // Fetch lotteryParticipantsAmount
          const participantsAmount = await contract1.lotteryParticipantsAmount();
          setLotteryParticipantsAmount(participantsAmount.toString());
          console.log('LotteryParticipantsAmount fetched.');
  
          // Fetch wallet balance
          const walletAddress = '0xaeaaEc377882436829349C95a0d16654456fd772'; // Replace with the actual wallet address
          const balanceWei = await provider.getBalance(walletAddress);
          const balanceEth = ethers.utils.formatEther(balanceWei);
          setWalletBalance(balanceEth);
          console.log('Wallet balance fetched.');
  
          // Calculate completion percentage based on fixed amount and wallet balance
          const completionPercentage = (balanceEth / fixedAmount) * 100;
          setCompletionPercentage(completionPercentage);
          console.log('Completion percentage calculated:', completionPercentage);
  
          // Set lottery status based on completion percentage
          if (completionPercentage >= 100) {
            setLotteryStatus('Lottery Shuffling');
          } else {
            setLotteryStatus(`${completionPercentage.toFixed(2)}%`);
          }
          console.log('Lottery status set:', lotteryStatus);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  fetchData();
  }, [contractAddress1, contractAddress2]);

// Check if the lotteryWinnerInfo function exists in the contract ABI
  const lotteryWinnerInfoFunction = contractAbi1.find((item) => item.name === 'lotteryWinnerInfo');
  
  if (!lotteryWinnerInfoFunction) {
    console.error("lotteryWinnerInfo function not found in contract ABI");
  } else {
    console.log("lotteryWinnerInfo function exists in contract ABI");
  }
  
  const [roundNumber, setRoundNumber] = useState('');
  const [winnerInfo, setWinnerInfo] = useState(null);
  
  async function fetchWinnerInfo(round) {
    try {
      const winnerInfo = await contract1.lotteryWinnerInfo(round);
  
      const prizeAmount = (winnerInfo.prizeAmount / 1e18).toFixed(5);
  
      setWinnerInfo({
        roundNumber: winnerInfo.randomNumber.toString(),
        prizeGet: prizeAmount + ' ETH',
        walletAddress: winnerInfo.wallet
      });
    } catch (error) {
      console.error("Error fetching winner info:", error);
      setWinnerInfo(null);
    }
  }
  
  useEffect(() => {
    if (roundNumber !== '') {
      fetchWinnerInfo(roundNumber);
    }
  }, [roundNumber]);

return (
    <><div className="container">
      <div className="section-header section-header--middle">
        <div className="section-header__titlebar">
          <Simple  title="BINGO TOKEN" />
        </div>
      </div>
      <div className="pro-details__wrapper">
        {/* project item */}
        <div className="pro-details__block mb-4">
          <div className="pro-details__block-inner">
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 col-sm-6">
              <div className="section-header section-header--middle">
      </div>
                <div className="project__item">
                  <div className="project__item-inner">
                    <div className="project__item-thumb">
                      <Image src="/images/igo/item/01.jpg"
                        width={500}
                        height={500}
                        alt="IGO cover" />

                      <span className="badge">
                        <Image src="/images/chain/solana.png"
                          width={35}
                          height={35}
                          alt="chain logo" />
                      </span>
                    </div>
                    <div className="project__item-content">
                      <div className="project__item-top">
                        <div className="project__item-author">
                          <Link href="#">
                            <Image src="/images/igo/author/1.png"
                              width={80}
                              height={80}
                              alt="author image" />
                          </Link>
                          <h4>BASE BINGO</h4>
                        </div>
                      </div>
                      <div className="project__item-middle">
                        <ul className="project__infolist">
                          <li className="project__infolist-item">
                            <p className="project__infolist-name">
                              Next Round :
                            </p>
                            <p className="project__infolist-data">{parseInt(lotteryRound) + 1}</p>
                            {/* <p>Completion Percentage: {completionPercentage.toFixed(2)}%</p> */}

                          </li>
                          <li className="project__infolist-item">
                            <p className="project__infolist-name">
                              Total Participant
                            </p>
                            <p className="project__infolist-data">{lotteryParticipantsAmount}</p>
                          </li>
                        </ul>
                        <div className="project__item-amount">
  <p>Bingo Bonanza:</p>
  <h6 className="h8-container">
    <span className="color--theme-color">
      {lotteryStatus}
    </span>
  </h6>
  <div className="progress">
    <div
      className="progress-bar"
      role="progressbar"
      style={{
        width: `${Math.min(completionPercentage, 100)}%`,
        transition: 'width 2s ease-in-out' // Add a CSS transition for smooth change
      }}
      aria-valuenow={completionPercentage}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  </div>
</div>

                      </div>
                      <div className="project__item-bottom">
                        <Link
                          href="https://www.dextools.io/app/en/base/pair-explorer/0xb9070f5596261c6888eab2a4e72531ddd8b33b18"
                          className="default-btn default-btn--small"
                        >
                          Chart
                        </Link>
                        <Link
                          href="https://basedswap.exchange/#/swap?outputCurrency=0x17528572ffa56c5d7784f414923faa8427ac75a8" className="default-btn default-btn--small"
                        >
                          BUY NOW
                        </Link>
                      </div>
                      


                    </div>
                  </div>
                </div>
              </div>

              {/* dashbord */}
              <div className="col-lg-8">
                <div className="pro-details__info">
                  <div className="row g-2">
                    <div className="col-sm-8">
                      <div className="pro-details__info-item">
                        <h6 className="pro-details__info-name">Last Winner</h6>
                        <p >
                  <span style={{ fontSize: '18px' }}>{latestWinnerWallet}  </span> <button className="default-btn--secondary" onClick={() => copyToClipboard(account.toString())}>
                    <FontAwesomeIcon icon={faClone} style={{ fontSize: '10px' }} />
                  </button>
                </p>
                        
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pro-details__info-item">
                        <h6 className="pro-details__info-name">
                        Last Win Ammount
                        </h6>
                        <p className="pro-details__info-value">
                        {latestWinnerAmount} ETH</p>
                        
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="pro-details__info-item">
                        <h6 className="pro-details__info-name">
                        Total Rewards given
                        </h6>
                        <p className="pro-details__info-value">
  {totalRewardsGiven !== '0.0' ? `${totalRewardsGiven} ETH` : 'Not started yet'}
      </p>

                      </div>
                    </div>
                    {/* reffer */}
                    <div className="col-sm-6">
                      <div className="pro-details__info-item">
                        <h6 className="pro-details__info-name">Completed Round</h6>
                        <p className="pro-details__info-value"> {lotteryRound}</p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="pro-details__info-item">
                        <h6 className="pro-details__info-name">
                        Winning Prize
                        </h6>
                        <p className="pro-details__info-value">
                        {lotteryExecuteAmount}
                        </p>
                      </div>
                    </div>
                    

                    <div className="col-sm-6">
                      <div className="pro-details__info-item">
                        <h6 className="pro-details__info-name">
                          Minimum Ammount To Participants  
                        </h6>
                        <p className="pro-details__info-value">
                        {minAmountToParticipate} $BINGO
                        </p>
                      </div>
                    </div>
                    {/* winner checker */}
                    <div className="col-sm-12">
      <div className="pro-details__info-item">
        <div className="stacking__approve">
          <div className="stacking__approve-field mb-5">
            <label htmlFor="approve-stack" className="form-label">
              Winner Checker
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                aria-label="Approve Stack"
                id="approve-stack"
                step="0.01"
                placeholder="Round number"
                value={roundNumber}
                onChange={(e) => setRoundNumber(e.target.value)}
              />
              <button
                className="input-group-btn"
                onClick={() => fetchWinnerInfo(roundNumber)} // Move fetchWinnerInfo here
              >
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Winner info */}
    {winnerInfo && (
    <div className="col-sm-3">
      <div className="pro-details__info-item">
        <h6 className="pro-details__info-name">Win By</h6>
        <p className="pro-details__info-value">
          {winnerInfo ? winnerInfo.roundNumber : 'Not started'}
        </p>
      </div>
    </div>
    )}
{winnerInfo && (
    <div className="col-sm-3">
      <div className="pro-details__info-item">
        <h6 className="pro-details__info-name">Winner Prize Get</h6>
        <p className="pro-details__info-value">
          {winnerInfo ? winnerInfo.prizeGet : 'Not started yet'}
        </p>
      </div>
    </div>
    )}
    {winnerInfo && (
    <div className="col-sm-6">
      <div className="pro-details__info-item">
        <h6 className="pro-details__info-name">Winner Wallet Address</h6>
        <p className="pro-details__info-value" style={{ fontSize: '15px' }}>
  {winnerInfo ? winnerInfo.walletAddress : 'Not started yet'}
</p>

      </div>
    </div>
    )}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* airdrop status infos */}
      </div>
    </div>
    <div>



{/*

    <div className="container">
      <div className="section-header section-header--middle">
        <div className="section-header__titlebar">
          <Simple subTitle="Winner" title="Winner List" />
        </div>
        
        <div>
  <h3>Last 10 Rounds Winner Info</h3>
  <ul>
    {winnerInfo && winnerInfo.length > 0 ? (
      winnerInfo.map(info => (
        <li key={info.round}>
          Round {info.round}: Wallet {info.wallet}, Prize Amount {info.prizeAmount} ETH
        </li>
      ))
    ) : (
      <p>No winner information available.</p>
    )}
  </ul>
</div>
      </div>
    </div>
*/}
      </div></>
  );
}
