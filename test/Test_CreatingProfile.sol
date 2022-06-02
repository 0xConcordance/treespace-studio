pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/TreespaceProfile.sol";

contract Test_CreatingProfiles {
    
    struct _userProfile {
        string name;
        string profilePictureLink;
        string describtion;         
    }

    TreespaceProfile treespaceprofile = TreespaceProfile(DeployedAddresses.TreespaceProfile());

    function testCreation() public {

        string memory name = "Nroo";
        string memory profilePicture = "https://super.com";
        string memory describtion = "One good artist.";

        treespaceprofile.createTreespaceProfile(
            name, profilePicture, describtion
            );
        
        uint userID = treespaceprofile.addressToUserID(address(this));

        Assert.equal(userID, 0, "Name does not equal.");
    }

    function testCounter() public {
        
        // create mutliple profiles and test the counter 
        string memory name = "Nroo broooooo";
        string memory profilePicture = "https://super.com";
        string memory describtion = "One good artist.";

        uint amountOfProfiles = 10; 
        for(uint i; i <= amountOfProfiles; i++) {
            // create profile 
            treespaceprofile.createTreespaceProfile(
                name, profilePicture, describtion
            );  
        } // we create 10 profiles - should fail since the name is the same

    }

    function testIsNameTaken() public {
        string memory name = "bro";
        string memory profilePicture = "https://super.com";
        string memory describtion = "One good artist.";

        treespaceprofile.createTreespaceProfile(
            name, profilePicture, describtion
        );  

        Assert.equal(treespaceprofile.isNameTaken(name), bool(true), "Check does no assign.");
    }

}