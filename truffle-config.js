const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const privateKey = '0x..';

module.exports = {
  networks: {
    energiTestnet: {
      provider: () => new HDWalletProvider(privateKey, `http://127.0.0.1:49796`),
      network_id: 49797,    
      gas: 5500000,
      from: '0xa57ed899Cd9587952Cbf284c9459DB4fF6DEe53A',
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
}
