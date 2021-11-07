require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword strike crawl situate unknown give clock equal gate'; 
let testAccounts = [
"0x035044e86b3160ec75cb95ad3125081935efab08546745f41d7c24cc8971a817",
"0x86edaf315d69e2ed96d02cf710348f6c6e3a54d5986c799c6237ad20f95cc6b7",
"0x1ce0d280728c7c0c49ec8bf2d80a6d2ba37b199082a20d334544aa43d344a851",
"0xcca0b2a03a71fcaada9a58db983b16c3fac511cf0ae45a89ba18a01b6ffd42d4",
"0x7d7af552fefe2f419d67f0cfe2849cec0d3f3bb09bce16730294cf711f356753",
"0x9438d38e35a1fbf26f20121efbf3e6203f97f953184198dcc5c7d74a53329637",
"0xd6d776f766038d243f2521c01e5afbdea8dcea30ace5d2ca7e69c4502750e39b",
"0x4b4f65c6c0f386e1053be813c47cce5d53a842cd921d4530bbf248bd8ca18873",
"0xde343c22de544895464d584f20ad437fc664b01447158bcf77b0976ec21132d5",
"0xbd0c74593a11e7d4fe69e4939c7a0153d01ad1fb13e1e254f59f0de6e46601e7"
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

