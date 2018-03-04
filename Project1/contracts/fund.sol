pragma solidity ^0.4.18; 

contract Fund {

	struct Donor {
		string name; 
		uint amount; 
	}

	string public organization; 
	address public beneficiary; 
	address[] donor_addresses; 
	mapping(address => Donor) public donors;
	

	function Fund(string _name) public {
		organization = _name; 
		beneficiary = msg.sender;  
	}

	function donate(string _name) public payable{
		donors[msg.sender].name = _name;
		donors[msg.sender].amount = msg.value;
		donor_addresses.push(msg.sender);
		beneficiary.transfer(msg.value); 
		
	}

	function get_donors() public view returns(address[]) {
	   return donor_addresses; 
	}
	
	function get_name(address _donor) public view returns(string) {
	    return donors[_donor].name; 
	}
	
	function get_amount(address _donor) public view returns(uint) {
	    return donors[_donor].amount; 
	}

	function get_organization_name() public view returns(string) {
		return organization; 
	}

}