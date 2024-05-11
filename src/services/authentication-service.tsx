export default class AuthenticationService {

	static authenticated:boolean = false;
  
	static login(username: string, password: string): Promise<boolean> {
	  const isAuthenticated = (username === 'onlycams1' && password === 'onlycams1');
  
	  return new Promise(resolve => {
		setTimeout(() => {
		  this.authenticated = isAuthenticated;
		  resolve(isAuthenticated);
		}, 1000);
	  });
	}

	static isAuthenticated(): boolean {
	  return this.authenticated;
  }
}