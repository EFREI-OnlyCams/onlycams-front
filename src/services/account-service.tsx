import { Account } from "../utils/account-type";

export default class AccountService {
	static account: Account = { email: '', motDePasse: '', nom: '', prenom: '', numeroTel: "", note: ''};

	static setEmail = (email: string): void => {
		AccountService.account.email = email;
	}

	static setPassword = (motDePasse: string): void => {
		AccountService.account.motDePasse = motDePasse;
	}

	static setLastName = (nom: string): void => {
		AccountService.account.nom = nom;
	}

	static settFirstName = (prenom: string): void => {
		AccountService.account.prenom = prenom;
	}

	static setPhoneNumber = (numeroTel: string ): void => {
		AccountService.account.numeroTel = numeroTel;
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
		this.account = { email: '', motDePasse: '' };
	}

}