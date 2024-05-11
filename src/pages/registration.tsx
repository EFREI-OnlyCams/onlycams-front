import { FunctionComponent, useState } from "react";
import { Account } from "../utils/account-type";
import AuthenticationService from "../services/authentication-service";
import '../css/registration.css';

const Registration : FunctionComponent = () => {

	const initAccount: Account = {
		email: "",
		password: "",
		lastName: "",
		firstName: "",
		adress: "",
		phoneNumber: "",
		note: ""
	};

	const [account, setAccount] = useState(initAccount);

	const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
		const { name, value } = e.target;
		setAccount({ ...account, [name]: value });
	};

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		AuthenticationService.registerAccount(account);
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
				<label htmlFor="password">Password</label>
				<input
				  type="password"
				  name="password"
				  onChange={handleInputChange}
				  required
				/>
			  </div>
			  <div className="input-field">
				<label htmlFor="lastName">Last Name</label>
				<input
				  type="text"
				  name="lastName"
				  onChange={handleInputChange}
				  required
				/>
			  </div>
			  <div className="input-field">
				<label htmlFor="firstName">First Name</label>
				<input
				  type="text"
				  name="firstName"
				  onChange={handleInputChange}
				  required
				/>
			  </div>
			  <div className="input-field">
				<label htmlFor="adress">adress</label>
				<input
				  type="text"
				  name="adress"
				  onChange={handleInputChange}
				  required
				/>
			  </div>
			  <div className="input-field">
				<label htmlFor="phoneNumber">Phone Number</label>
				<input
				  type="text"
				  name="phoneNumber"
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