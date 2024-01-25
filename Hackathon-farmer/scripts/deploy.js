const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const Registration = await hre.ethers.deployContract("Registration");
  const registration = await Registration.waitForDeployment();

  await registration.waitForDeployment();

  console.log("Registration contract deployed: ", registration.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
