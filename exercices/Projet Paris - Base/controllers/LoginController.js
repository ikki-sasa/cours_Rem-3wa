import app from "../app/app.js";
class LoginController {
	constructor() {
		this.viewPath = "views/login.html";
	}
	// méthode déclenchée après que le DOM de la page principale ait été mis à jour avec les contenus de la vue partielle
	executeAfterDomUpdate() {
		// [TODO] gérer la connexion sécurisée via firebase
		document
			.querySelector("#githubLoginBtn")
			.addEvenListener("click", app.firebase.login);
	}
}
export default LoginController;