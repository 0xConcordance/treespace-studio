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

    function testCreation() public {
        
        TreespaceProfile treespaceprofile = TreespaceProfile(DeployedAddresses.TreespaceProfile());

        string memory name;
        string memory profilePicture;
        string memory describtion;

        treespaceprofile.createTreespaceProfile(
            name, profilePicture, describtion
            );
        
        uint userID = treespaceprofile.addressToUserID(address(this));

        // check if the name given matches the name in the profile
        _userProfile memory localProfile = treespaceprofile.userIdToProfile(userID);

        Assert.equal(localProfile["name"], name, "Name does not equal.");

    }


}