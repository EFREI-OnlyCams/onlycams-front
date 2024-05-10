import {FunctionComponent} from 'react';
import AuthenticationService from '../services/authentication-service';

const AccountInformation: FunctionComponent = () => {

	// Check if the user is authenticated

	return (
		<div>
			<h1>Account Information</h1>
			<p>Update your account information here.</p>
		</div>
	);
};

export default AccountInformation;