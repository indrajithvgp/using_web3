pragma solidity ^0.7.1;

contract HotelRoom{
    address payable public owner;
    enum Choices { Ocuupied, Vaccant}
    Choices choiCe;
    constructor public{
        owner = msg.sender;
        choiCe = Choices.Vacant;
        uint amount = 5;
    }
    modifier check(){
        require(choiCe = Choices.Vacant, "Occupiedddddddd");
        _;
    }
    modifier moneycheck(){
        require(msg.value == amount, "Not enough money");
        _;
    function reserve() public payable check moneycheck{     
        owner.transfer(msg.value)
        choiCe = Choices.Ocuupied;
    }
}