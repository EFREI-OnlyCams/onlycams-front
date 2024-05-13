import AccountService from "./account-service";
import{ Account }from "../utils/account-type";

export default class AuthenticationService {

	static authenticated:boolean = false;

  
	static login(id: string, email: string, mot_de_passe: string): Promise<boolean> {
	  console.log(`Email: ${email}, Password: ${mot_de_passe}`);
	  const isAuthenticated = id !=="-1";
	  AccountService.setId(id);
	  AccountService.setEmail(email);
	  AccountService.setPassword(mot_de_passe);
  
	  return new Promise(resolve => {
		setTimeout(() => {
		  this.authenticated = isAuthenticated;
		  console.log(`Is authenticated: ${isAuthenticated}`);
		  resolve(isAuthenticated);
		}, 1000);
	  });
	}

	static logout(): Promise<boolean> {
		return new Promise(resolve => {
		setTimeout(() => {
		  this.authenticated = false;
		  resolve(true);
		}, 1000);
	  });
	}

	static isAuthenticated(): boolean {
	  return this.authenticated;
  	}

	static registerAccount(account : Account): void {
	}

	// Requête vers le back pour récupérer les informations de l'utilisateur

}