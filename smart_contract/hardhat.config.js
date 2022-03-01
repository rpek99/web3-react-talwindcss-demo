// https://eth-ropsten.alchemyapi.io/v2/90Vh2Mq1Bu5JSM4rLFgdvEo4Vtev5Nue

require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity : '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/90Vh2Mq1Bu5JSM4rLFgdvEo4Vtev5Nue',
            accounts: [ 'ef81326770ed3a8a08e1369d3cae559762fe786550955e6137ef7aeb81592014' ]
        }
    }
}