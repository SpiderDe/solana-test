const SOLANA = require('@solana/web3.js');
const { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } = SOLANA;

require('dotenv').config();
const QUICKNODE_RPC = process.env.QUICKNODE_RPC; 
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;

const SOLANA_CONNECTION = new Connection(QUICKNODE_RPC);
(async () => {
    let balance = await SOLANA_CONNECTION.getBalance(new PublicKey(WALLET_ADDRESS));
    console.log(`Wallet Balance: ${balance/LAMPORTS_PER_SOL}`)
})();