export type Account = {
	utilisateurId: string;
	email: string;
	motDePasse: string;
	nom?: string;
	prenom?: string;
	adresse?: string;
	numeroTel?: string;
	note?: string;
};

// src/types.ts
export interface UtilisateurDTO {
	utilisateurId: string;
	nom: string;
	prenom: string;
	email: string;
	numeroTel: string;
	estValide: boolean;
	estAdmin: boolean;
	note: number;
	adresse: string;
  }
  