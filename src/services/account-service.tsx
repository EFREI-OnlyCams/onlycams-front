import { Account } from "../utils/account-type";
//import axios from 'axios';

const ACCOUNT_API_BASE_URL = 'http://localhost:8081/api'; // Replace with your actual backend URL

export default class AccountService {
	static account: Account = {utilisateurId: '', email: '', motDePasse: '', nom: '', prenom: '', numeroTel: "", note: ''};

	static getId = (): string => AccountService.account.utilisateurId;

	static setId = (id: string): void => {
		AccountService.account.utilisateurId =id;
	}
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
		this.account = {utilisateurId: '', email: '', motDePasse: '' };
	}


}