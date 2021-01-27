const login = (email, password, callback) => {
	// attente d'1s pour "simuler" l'attente d'une réponse HTTP qu'on aurait si on validait nos identifiants avec une requete serveur
	setTimeout(() => {
		callback(email);
	}, 1000);
};

const displayEmail = (em) => {
	console.log(`EMAIL VERIFIE: ${em}`);
};

login("alan@alan.fr", 1234567890, displayEmail);