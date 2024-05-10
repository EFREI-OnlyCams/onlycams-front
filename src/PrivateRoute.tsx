import React from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';

const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const isAuthenticated = AuthenticationService.isAuthenticated;

  if (!isAuthenticated) {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    return <Navigate to="/login" />;
  }

  // Rendre le composant Route avec les props restantes
  return <Route {...rest} />;
};

export default PrivateRoute;
