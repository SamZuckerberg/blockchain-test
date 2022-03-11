//SPDX-License-Identifier: MIT
pragma solidity 0.7.0;

import "./SafeMath.sol";

contract Likable {
    using SafeMath for uint256;
    uint256 public likes;

    function remove() public {
        likes = likes.sub(1);
    }

    function add() public {
        likes = likes.add(1);
    }
}