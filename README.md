# udemy-blockchain-inbox

Completed Inbox project exercise from Udemy course [Ethereum and Solidity: The Complete Developer's Guide](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/).

### Stack
* Node 14
* Solidity 0.8.x
* Truffle (HDWallet)
* Ganache CLI
* Web3
* Mocha


### Compile
`node compile`

### Test
`npm test`

### Deploy

To deploy the Inbox contract to the Rinkeby testnet:
1. Create a `.env` file in the project root.
2. Add entries for MNEMONIC and PROVIDER_URL. e.g. 
```
MNEMONIC="alpha ... lima"
PROVIDER_URL="https://rinkeby.infura.io/v3/<PROJECT_ID>"
```
3. Run `node deploy`

