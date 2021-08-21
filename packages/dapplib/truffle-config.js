require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name renew noise artwork idea nasty flock general'; 
let testAccounts = [
"0xd9b4f16e85125e982629b9776be5d366987ebeb92cfde83e6e9cb2af51fa6079",
"0x7dc99da548e2886e0b700148e30e8629994997f0be99b27a07c7d97112741e5a",
"0xad8ae768a89c6aa8a7076c5c878f92aeff5c80008e1bcaac93d3501d2cbe3cf2",
"0x4baf21afa82acb23d429e54df1f0b34517b1899aed14b37b76664ee1c8e92f8a",
"0xbe973abf490742103edfbe4a9556035b1c58560e8dd6fd3ea6798be959bf754b",
"0x71b708a7d79e7fffb0b3849dab22243cbeb38d433b7f6762a4b9adebd42bbd59",
"0xa24e566e4dab11b74759301a92b5e63140fe5df0d45bbb466367fc9966997bb9",
"0x9cfafa80a26ea1b3da9dfe7c9287f8db25475e6bb1fc798d6886fc8b4ef15839",
"0x080277bb975bb0a9a0c34a504f3f30f35466850cfa497f14be8748b21630a9e8",
"0x71cee488932edef20f8620bf70abd2e1b4a0282db27e444ff416c18ef1a3a95f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

