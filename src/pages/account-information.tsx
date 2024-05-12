import React, { useState } from 'react';
import AccountService from '../services/account-service';
import '../css/account-information.css';

const AccountInformation = () => {
  const [account, setAccount] = useState(AccountService.account);
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Ajoutez ici la logique pour soumettre les modifications au backend
    console.log('Account updated:', account);
    setEditMode(false); // Désactiver le mode d'édition après la soumission
  };

  const handleCancelEdit = () => {
    setAccount(AccountService.account); // Réinitialiser les champs
    setEditMode(false); // Désactiver le mode d'édition
  };

  return (
    <div className="container">
      <h2>Account Information</h2>
      {editMode ? (
        <form onSubmit={handleSubmit} className="col s12">
          <div className="input-field">
		  	<label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={account.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="motDePasse">Password</label>
            <input
              type="password"
              name="motDePasse"
              value={account.motDePasse}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="nom">Last Name</label>
            <input
              type="text"
              name="nom"
              value={account.nom}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="prenom">First Name</label>
            <input
              type="text"
              name="prenom"
              value={account.prenom}
              onChange={handleInputChange}
            />
          </div>
		  <div className="input-field">
            <label htmlFor="adresse">adress</label>
            <input
              type="text"
              name="adresse"
              value={account.adresse}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="numeroTel">Phone Number</label>
            <input
              type="text"
              name="numeroTel"
              value={account.numeroTel}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-field">
		  	<label htmlFor="note">Note</label>
            <textarea
              name="note"
              value={account.note}
              onChange={handleInputChange}
              className="materialize-textarea"
            />
          </div>
          <button className="waves-effect waves-light btn" type="submit">Save</button>
          <button className="waves-effect waves-light btn red" type="button" onClick={handleCancelEdit}>Cancel</button>
        </form>
      ) : (
        <div>
          <p>Email: {account.email}</p>
          <p>Last Name: {account.nom}</p>
          <p>First Name: {account.prenom}</p>
          <p>Phone Number: {account.numeroTel}</p>
          <p>Note: {account.note}</p>
          <button className="waves-effect waves-light btn" onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default AccountInformation;
