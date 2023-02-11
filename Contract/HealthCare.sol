// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;


contract Doctor {
    mapping (address => doctor) internal doctors;
    mapping (address => mapping(address => uint)) internal doctorToPatient;
    
    struct doctor {
        string name;
        address id;
        address[] patient_list;
    }
    
    modifier checkDoctor(address id)  {
        doctor storage d = doctors[id];
        require(d.id > address(0x0));//check if doctor exist
        _;
    }
    
    function getDoctorInfo() public view checkDoctor(msg.sender) returns(string memory,address, address[] memory){
        doctor storage  d = doctors[msg.sender];
        return (d.name,d.id, d.patient_list);
    }
    
    function signupDoctor(string memory _name) public {
        doctor storage d = doctors[msg.sender];
        require(!(d.id > address(0x0)));

        doctors[msg.sender] = doctor({name:_name,id:msg.sender,patient_list:new address[](0)});
    }    
    
}

contract Patient {
    mapping (address => patient) internal patients;
    // mapping (address => mapping (address => uint)) internal patientToDoctor;
    
    struct patient {
        string name;
        address id;
        string history;// hashes of file that belong to this user for display purpose
        address[] doctor_list;
        address[] request_list;
    }
    
    modifier checkPatient(address id) {
        patient storage p = patients[id];
        require(p.id > address(0x0));//check if patient exist
        _;
    }
    
    function getPatientInfo() public view checkPatient(msg.sender) returns(string memory,address, string memory, address[] memory, address[] memory) {
        patient storage p = patients[msg.sender];
        return (p.name,p.id, p.history, p.doctor_list, p.request_list);
    }
    
    function signupPatient(string memory _name) public {
        patient storage p = patients[msg.sender];
        require(!(p.id > address(0x0)));
        string memory initial = "";

        patients[msg.sender] = patient({name:_name,id:msg.sender,history:initial,doctor_list:new address[](0),request_list:new address[](0)});
    }

}

contract HealthCare is Doctor, Patient {
    address private owner;
    
    constructor () { 
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    function checkProfile(address _user) public view onlyOwner returns(string memory, string memory){
        patient storage p = patients[_user];
        doctor storage d = doctors[_user];
          
        if(p.id > address(0x0))
            return (p.name, 'patient');
        else if(d.id > address(0x0))
            return (d.name, 'doctor');
        else
            return ('', '');
    }
   //patient calls this
    function grantAccessToDoctor() public checkPatient(msg.sender) {
        patient storage p = patients[msg.sender];
        address doctor_id = p.request_list[p.request_list.length-1];
        doctor storage d = doctors[doctor_id];
        // require(patientToDoctor[msg.sender][doctor_id] < 1);// this means doctor already been access
      
         p.doctor_list.push(doctor_id);// new length of array
        //  uint pos = pos + 1;

        // patientToDoctor[msg.sender][doctor_id] = pos;
        d.patient_list.push(msg.sender);
        delete p.request_list[p.request_list.length-1];
    }
  
    function addFile(string memory _prescription) public checkDoctor(msg.sender) {
        doctor storage d = doctors[msg.sender];
        address pid = d.patient_list[d.patient_list.length-1];
        patient storage p = patients[pid];
        string memory temp;
        
        temp = p.history;
        p.history =string(abi.encodePacked(temp, ",", _prescription));
    }
    
    function getPatientInfoForDoctor(address pat) public view checkPatient(pat) checkDoctor(msg.sender) returns(string memory, address, string memory){
        patient storage p = patients[pat];
        // require(patientToDoctor[pat][msg.sender] > 0);
        return (p.name, p.id, p.history);
    }
    
    function getFileInfoPatient() public view 
    onlyOwner checkPatient(msg.sender) returns(string memory) {
        patient storage p = patients[msg.sender];
        return (p.history);
    }
    //doc calls this patient list la doc id will be stored
    function requestAccess(address pat)public checkPatient(pat) checkDoctor(msg.sender){
        patient storage p = patients[pat];
        p.request_list.push(msg.sender);
    }
  
}

