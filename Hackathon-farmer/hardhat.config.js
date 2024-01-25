require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"Ganache",
  networks:{
    hardhat:{},
    Ganache:{
      url:"http://127.0.0.1:7545"
    }
  },
  solidity: "0.8.19",
};
