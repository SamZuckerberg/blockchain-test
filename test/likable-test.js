const { expect, assert } = require("chai");
const { ethers } = require("hardhat");

let likable;

beforeEach(async function() {
    const likableContract = await ethers.getContractFactory("Likable");
    likable = await likableContract.deploy();
    await likable.deployed();
});

describe("Likable", function () {
  it("Should not subtract from zero", async function () {
    try {
      await likable.remove();
      assert.fail("The transaction should have thrown an error");
    }
    catch(error) {
      assert.include(error.message, 'subtraction overflow', "Reverted with reason string 'SafeMath: subtraction overflow");
    }
  });

  it("Should add and remove the amount", async function () {
    await likable.add();
    expect(await likable.likes()).to.equal(1);

    await likable.remove();
    expect(await likable.likes()).to.equal(0);
  });
});
