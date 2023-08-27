const { Web3 } = require('web3');
const Contract = require('./build/contracts/HelloWorld.json');

const init = async () => {
  const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
  const id = await web3.eth.net.getId();
  const deployedNetwork = Contract.networks[id];
  const contract = new web3.eth.Contract(Contract.abi, deployedNetwork.address);

  const data = await contract.methods.message().call();
  console.log(data);
};

init();
