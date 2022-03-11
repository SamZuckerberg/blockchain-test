const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

let owner;
let bank;

beforeEach(async function () {
  [owner] = await ethers.getSigners();
  const bankContract = await ethers.getContractFactory("Bank");
  bank = await bankContract.deploy();
  await bank.deployed();
});

describe("Likable", function () {
  it("Should withraw balance", async function () {
    const amountToSend = ethers.utils.parseEther("0.5");
    await bank.addToBalance({ from: owner.address, value: amountToSend });
  
    expect(await bank.getBalance(owner.address)).to.equal(amountToSend)

    await bank.withdrawBalance({ from: owner.address});
    
    expect(await bank.getBalance(owner.address)).to.equal(0)
  });

  it("Should add Balance to account", async function () {
    const amountToSend = ethers.utils.parseEther("0.5");
    await bank.addToBalance({ from: owner.address, value: amountToSend });
  
    expect(await bank.getBalance(owner.address)).to.equal(amountToSend)
  });
});
