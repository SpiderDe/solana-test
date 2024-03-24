const SOLANA = require('@solana/web3.js');
require('dotenv').config();

const { Connection, PublicKey, LAMPORTS_PER_SOL, clusterApiUrl } = SOLANA;
const SOLANA_CONNECTION = new Connection(clusterApiUrl('devnet'));
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;
const AIRDROP_AMOUNT = 1 * LAMPORTS_PER_SOL; // 1 SOL 

(async () => {
    console.log(`Requesting airdrop for ${WALLET_ADDRESS}`)
    const signature = await SOLANA_CONNECTION.requestAirdrop(
        new PublicKey(WALLET_ADDRESS),
        AIRDROP_AMOUNT
    );
    const { blockhash, lastValidBlockHeight } = await SOLANA_CONNECTION.getLatestBlockhash();
    await SOLANA_CONNECTION.confirmTransaction({
        blockhash,
        lastValidBlockHeight,
        signature
    },'finalized');
    console.log(`Tx Complete: https://explorer.solana.com/tx/${signature}?cluster=devnet`)
})();