import { FunctionComponent, useState } from "react";
import { Account } from "../utils/account-type";
import '../css/registration.css';

const Registration: FunctionComponent = () => {
  const initAccount: Account = {
	nom: "",
	prenom: "",
	motDePasse: "",
	numeroTel: "",
	note: "",
    adresse: "",
	email: "",

  };

  const [account, setAccount] = useState(initAccount);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(account),
      });
      if (!response.ok) {
        throw new Error('Failed to register account');
      }
      // Optionally handle success response here
      console.log('Account registered successfully');
    } catch (error) {
      console.error('Error registering account:');
    }
  };

  return (
    <div className="container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit} className="col s12">
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="motDePasse">Password</label>
          <input
            type="password"
            name="motDePasse"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="nom">Last Name</label>
          <input
            type="text"
            name="nom"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="prenom">First Name</label>
          <input
            type="text"
            name="prenom"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="adresse">Address</label>
          <input
            type="text"
            name="adresse"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="numeroTel">Phone Number</label>
          <input
            type="text"
            name="numeroTel"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="note">Note</label>
          <textarea
            name="note"
            onChange={handleInputChange}
            className="materialize-textarea"
          />
        </div>
        <button className="waves-effect waves-light btn" type="submit">Save</button>
      </form>
    </div>
  );
}

export default Registration;
