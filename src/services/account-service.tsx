import { Account } from "../utils/account-type";

export default class AccountService {
	static account: Account = { email: '', password: '', lastName: '', firstName: '', phoneNumber: '', note: ''};

	static setEmail = (email: string): void => {
		AccountService.account.email = email;
	}

	static setPassword = (password: string): void => {
		AccountService.account.password = password;
	}

	static setLastName = (lastName: string): void => {
		AccountService.account.lastName = lastName;
	}

	static settFirstName = (firstName: string): void => {
		AccountService.account.firstName = firstName;
	}

	static setPhoneNumber = (phoneNumber: string): void => {
		AccountService.account.phoneNumber = phoneNumber;
	}

	static setNote = (note: string): void => {
		AccountService.account.note = note;
	}

	static getAccount(): Account {
		return AccountService.account;
	}

	static updateAccount(account: Account): void {
		AccountService.account = account;
	}

	static clearAccount(): void {
		this.account = { email: '', password: '' };
	}

}