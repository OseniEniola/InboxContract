const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile');

const provider = new HDWalletProvider('tissue picture belt gaze into change cancel patient among wink there ankle',
'https://rinkeby.infura.io/v3/a2294de533f548f8a87974e88b407c89')

const web3= new Web3(provider);

const deploy = async () =>{
   const accounts = await web3.eth.getAccounts();

    console.log('Contract Account is: '+ accounts[0]);

   const result= await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode,arguments:['Hi there']})
    .send({from:accounts[0], gas:'1000000'})

    console.log('Contract is deployed on: ', result.options.address)
}

deploy()