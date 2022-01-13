async function main() {
  const NFT = await ethers.getContractFactory("NFT")

  // Start deployment, returning a promise that resolves to a contract object
  const mNFT = await NFT.deploy()
  await mNFT.deployed()
  console.log("Contract deployed to address:", mNFT.address)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
