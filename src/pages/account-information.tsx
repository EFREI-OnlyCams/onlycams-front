import React, { FunctionComponent, useState, useEffect } from 'react';
import { Account } from '../utils/account-type';
import '../css/account-information.css';

const AccountInformation: FunctionComponent = () => {
  const [account, setAccount] = useState<Account>({
    id: '',
    nom: '',
    prenom: '',
    motDePasse: '',
    numeroTel: '',
    note: '',
    adresse: '',
    email: '',
  });

  useEffect(() => {
    // Fetch account information
    const fetchAccount = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:8081/users/infosUser/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch account details');
        }
        const data: Account = await response.json();
        setAccount(data);
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };
    fetchAccount();
  }, []);

  return (
    <div className="container">
      <h2 className='title'>Account Information</h2>
      <div className="col s12">
        <div className="input-field">
          <label>Email</label>
          <input type="text" value={account.email} disabled />
        </div>
        <div className="input-field">
          <label>Password</label>
          <input type="password" value="********" disabled />
        </div>
        <div className="input-field">
          <label>Last Name</label>
          <input type="text" value={account.nom} disabled />
        </div>
        <div className="input-field">
          <label>First Name</label>
          <input type="text" value={account.prenom} disabled />
        </div>
        <div className="input-field">
          <label>Address</label>
          <input type="text" value={account.adresse} disabled />
        </div>
        <div className="input-field">
          <label>Phone Number</label>
          <input type="text" value={account.numeroTel} disabled />
        </div>
        <div className="input-field">
          <label>Note</label>
          <textarea value={account.note} className="materialize-textarea" disabled />
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
