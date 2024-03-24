const web3 = require("@solana/web3.js");
require('dotenv').config();

(async () => {
  const RPC = process.env.QUICKNODE_RPC;
  const solana = new web3.Connection(RPC);
  console.log(await solana.getSlot());
})();