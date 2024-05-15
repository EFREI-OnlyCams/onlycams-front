import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';
import '../css/login.css';

type Field = {
  value?: any,
  error?: string,
  isValid?: boolean
};

type Form = {
  username: Field,
  password: Field
}

interface LoginProps {
	onLogin: () => void;
  }

const Login: React.FC<LoginProps> = ({ onLogin }) => {

  const navigate = useNavigate();

  const [form, setForm] = useState<Form>({
    username: { value: '' },
    password: { value: '' },
  });

  const [message, setMessage] = useState<string>('Vous êtes déconnecté. Identifiez-vous.');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField});
  }

  const handleLogin = () => {// Récupérez l'URL de redirection depuis le local storage
	const redirectPath = localStorage.getItem('redirectPath') || '/home';
	
	// Supprimez l'URL de redirection du local storage
	localStorage.removeItem('redirectPath');
  
	// Redirigez l'utilisateur vers l'URL de redirection
	navigate(redirectPath);
  };

  const validateForm = () => {
    let newForm: Form = form;

    // Validator username
    if(form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if(form.password.value.length < 6) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 6 caractères de long.';
      const newField: Field = {value: form.password.value, error: errorMsg, isValid: false};
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ password: newField } };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    
    if (isFormValid) {
      setMessage('👉 Tentative de connexion en cours ...');
      
      try {
        const response = await fetch('http://localhost:8081/users/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: form.username.value, motDePasse: form.password.value }),
        });
        
        if (!response.ok) {
          throw new Error('Failed to verify credentials');
        }
        
        const userId = await response.json(); // Récupérer la valeur de retour de votre endpoint
        AuthenticationService.login(userId,form.username.value, form.password.value).then(isAuthenticated => {
          console.log(form.username.value, form.password.value, isAuthenticated);
              if(!isAuthenticated) {
                setMessage('🔐 Email ou mot de passe incorrect / Compte pas encore valide par admin');
                return;
              }
              localStorage.setItem('userId', userId.toString()); // Stocker l'ID de l'utilisateur dans le localStorage
            handleLogin();
            });
      } catch (error) {
        console.error('Error verifying credentials:', error);
        setMessage('🔐 Une erreur est survenue lors de la vérification des informations d\'identification.');
      }
    }
  }
  

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className = "login">
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            <div className="card-stacked">
              <div className="card-content">
                {/* Form message */}
                {message && <div className="form-group">
                  <div className="card-panel grey lighten-5">
                    {message}
                  </div>
                </div>}
                {/* Field username */}
                <div className="form-group">
                  <label htmlFor="username">Email</label>
                  <input id="username" type="text" name="username" className="form-control" value={form.username.value} onChange={e => handleInputChange(e)}></input>
                  {/* error */}
                  {form.username.error &&
                  <div className="card-panel red accent-1"> 
                   {form.username.error} 
                  </div>} 
                </div>
                {/* Field password */}
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input id="password" type="password" name="password" className="form-control" value={form.password.value} onChange={e => handleInputChange(e)}></input>
                  {/* error */}
                  {form.password.error &&
                  <div className="card-panel red accent-1"> 
                   {form.password.error} 
                  </div>} 
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn" onClick={onLogin}>Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>
  );
};
 
export default Login;