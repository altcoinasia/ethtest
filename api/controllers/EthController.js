/**
 * EthController
 *
 * @description :: Server-side logic for managing eths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Web3 = require('web3')
module.exports = {

  //personal.newAccount("passphrase")

  gettest: function(req, res) {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    web3.eth.getAccounts(console.log);

  },
  getnewaddress: function(req, res) {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    web3.eth.personal.newAccount('!@superpassword')
      .then(console.log);

  },


  sendValue: function(req, res) {
    var web3 = new Web3(new Web3.providers.HttpProvider("http://199.188.204.100:8545"));

    web3.eth.personal.unlockAccount("0x6837df4cd89a68c75cc92b0a2f2eea4d0045b736", "administrator", function(err, result) {
      if (err) {
        console.log(err);
        return;
      }
      web3.eth.sendTransaction({
          from: '0x6837df4cd89a68c75cc92b0a2f2eea4d0045b736',
          to: '0x1eae4a5994bee91cc9771a1db09d7e431f4e6beb',
          value: '1000000000000000'
        })
        .then(function(receipt) {
          console.log(receipt);
        });
    });

  }

};