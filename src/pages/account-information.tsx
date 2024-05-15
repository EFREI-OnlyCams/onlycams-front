import React, { FunctionComponent, useState, useEffect } from 'react';
import { Account } from '../utils/account-type';
import '../css/account-information.css';

const AccountInformation: FunctionComponent = () => {
  const [account, setAccount] = useState<Account>({
    utilisateurId: '',
    nom: '',
    prenom: '',
    motDePasse: '',
    numeroTel: '',
    note: '',
    adresse: '',
    email: '',
  });

  const [users, setUsers] = useState<Account[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  
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

        // Check if the user is admin
        console.log("data.Id",data.utilisateurId);
        console.log("data",data);



        if (data.utilisateurId === '40') {
          setIsAdmin(true);
          fetchAllUsers();
        }
      } catch (error) {
        console.error('Error fetching account details:', error);
      }
    };

    const fetchAllUsers = async () => {
      try {
        const response = await fetch('http://localhost:8081/users/allUsers');
        if (!response.ok) {
          throw new Error('Failed to fetch all users');
        }
        const data: Account[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching all users:', error);
      }
    };

    fetchAccount();
  }, []);

  const handleValidateUser = async (userId:string) => {
    try {
      // Parse userId as integer
      const userIdInt = parseInt(userId);
      const response = await fetch(`http://localhost:8081/users/validateUser/${userIdInt}`);
        
      if (!response.ok) {
        throw new Error('Failed to validate user');
      }

      // Refresh the page
      window.location.reload();
    } catch (error) {
      console.error('Error validating user:', error);
    }
  };


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

      {isAdmin && (
        <div className="admin-section">
          <h2 className='title'>All Users to Validate</h2>
          <table className="highlight">
            <thead>
              <tr>
                <th>Email</th>
                <th>Last Name</th>
                <th>First Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.utilisateurId}>
                  <td>{user.email}</td>
                  <td>{user.nom}</td>
                  <td>{user.prenom}</td>
                  <td>{user.adresse}</td>
                  <td>{user.numeroTel}</td>
                  <td>
                    <button onClick={() => handleValidateUser(user.utilisateurId)}>Validate</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AccountInformation;
