import AccountService from "./account-service";
import{ Account }from "../utils/account-type";

export default class AuthenticationService {

	static authenticated:boolean = false;

  
	static login(id: string, email: string, mot_de_passe: string): Promise<boolean> {
	  console.log(`Email: ${email}, Password: ${mot_de_passe}`);
	  const idString = id.toString(); 
	  const isAuthenticated = !(idString === "-1"); 
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
		  localStorage.setItem('userId', "-1");
		  resolve(true);
		}, 1000);
	  });
	}

	static isAuthenticated(): boolean {
		const userId = localStorage.getItem('userId');

		// Vérifier si userId n'est pas null et est différent de -1
		if (userId !== null && userId !== '-1') {
			return true;
		}
		return false;
  	}

	static registerAccount(account : Account): void {
	}

	// Requête vers le back pour récupérer les informations de l'utilisateur

}