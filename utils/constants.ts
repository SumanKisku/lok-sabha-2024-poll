import { createThirdwebClient, getContract, } from "thirdweb";
import { defineChain, polygonAmoy } from "thirdweb/chains";
// create the client with your clientId, or secretKey if in a server environment
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;

export const client = createThirdwebClient({
    clientId: CLIENT_ID as string,
});

// connect to your contract
export const contract = getContract({
    client,
    chain: defineChain(polygonAmoy),
    address: CONTRACT_ADDRESS as string,
    abi: [
        {
            "type": "function",
            "name": "getVotes",
            "inputs": [
                {
                    "type": "address",
                    "name": "_sender",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "type": "uint256[2]",
                    "name": "",
                    "internalType": "uint256[2]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "hasVoted",
            "inputs": [
                {
                    "type": "address",
                    "name": "_voter",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "type": "bool",
                    "name": "",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "voteBjp",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "voteCongress",
            "inputs": [],
            "outputs": [],
            "stateMutability": "nonpayable"
        }
    ]
});