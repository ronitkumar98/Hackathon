// React App (App.js)

import React, { useState } from 'react';
import Web3 from 'web3';
import './App.css';
import './artifacts/Registration.json'

function App() {
  const [userType, setUserType] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [contactNo, setContactNo] = useState('');

  const handleRegister = async () => {
    try {
      const web3 = new Web3(window.ethereum);

      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const contractAddress = '0x58d38e2F9802E3F50D5e310854bD2D01a5ABdBB0';
      const contractABI = './artifacts/Registration.json';

      const contract = new web3.eth.Contract(contractABI, contractAddress);

      // Add logic to interact with the smart contract and register the user
      await contract.methods
        .addFarmer(web3.utils.toHex(name), web3.utils.toHex(location), web3.utils.toHex(contactNo))
        .send({ from: (await web3.eth.getAccounts())[0] });

      // Clear the form after registration
      setUserType('');
      setName('');
      setLocation('');
      setContactNo('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Smart Contract Registration System</h1>
      <div className="form-container">
        <label>
          User Type:
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="">Select User Type</option>
            <option value="f">Farmer</option>
            {/* Add other user types */}
          </select>
        </label>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Location:
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label>
          Contact No:
          <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
        </label>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default App;
