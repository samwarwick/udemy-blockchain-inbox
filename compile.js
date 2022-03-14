const path = require('path');
const fs = require('fs');
const solc = require('solc');

const CONTRACT_FILENAME='Inbox.sol';

const inboxPath = path.resolve(__dirname, 'contracts', CONTRACT_FILENAME);
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        [CONTRACT_FILENAME]: {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};
   
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    CONTRACT_FILENAME
].Inbox;
