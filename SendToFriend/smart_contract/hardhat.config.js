require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/CiP-2kmojlgU2xEHmInBqCScYdRZO1Hj',
      accounts: ['510c2ec08ec3b365bbf3a8f19114143bd9e2885992ffc430467ace8b29b39021'],
    },
  },
};