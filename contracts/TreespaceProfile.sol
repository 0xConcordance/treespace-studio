// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// file: TreespaceProfile.sol
// @title Treespace Profile
// @dev allows approved artists to manage their treespace Profiles 
//      a treespace Profile is represented by a userID that can be transfered 
//      by the owner

/* 
TO DO
------
x create Treespace Profile
- add socials to the user ID
- transfer userProfile ownership to new address
- change TreespaceProfile information
- delete treespace Profile
- test the contracts
*/

contract TreespaceProfile {

    event createdTreespaceProfile(uint, string, address);

    // the user ID that corrosponds with the information
    uint _userID = 0;

    // user profile struct 
    struct _userProfile {
        string name;
        string profilePictureLink;
        string describtion;         
    }

    mapping(address => uint) public addressToUserID;
    mapping(uint => _userProfile) userIdToProfile; 

    // userID => (Platform => Username)
    mapping(uint => mapping(string => string)) userIdToSocials;

    /*
    CHECKS
    ------
    Checking if information is available. 
    */
    mapping(string => bool) public isNameTaken; 

    /* 
        @dev create a treespace profile, does not contain the socials yet
        @param _name
        @param _profilePictureLink
        @param _describtion
    */ 
    function createTreespaceProfile(
        string memory _name,
        string memory _profilePictureLink,
        string memory _describtion
    ) public {

        require(isNameTaken[_name] != true, 
        "TREESPACEPROFILE::createTreespaceProfile:Username already taken.");
        
        addressToUserID[msg.sender] = _userID;

        userIdToProfile[_userID] = _userProfile({
            name: _name,
            profilePictureLink: _profilePictureLink,
            describtion: _describtion

        });
        
        emit createdTreespaceProfile(_userID, _name, msg.sender);
    }


    /* 
        @dev add socials to a treespace Profile
        
    */ 

}

interface ITreespaceProfile {
    function createTreespaceProfile(string memory _name, string memory _profilePictureLink, string memory _describtion) external;


}