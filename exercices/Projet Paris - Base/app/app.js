import firebase from "firebase/app";
import "firebase/auth";

let app = {
	// ----------------------------------------------------------------------------------------------------------------
	// MANIPULATION DU DOM DE L'APPLICATION
	// ----------------------------------------------------------------------------------------------------------------
	dom: {
		checkLoginState: (user = null) => {
			const links =
				user === null
					? [
							{ title: "Accueil", href: "/#/" },
							{ title: "A propos", href: "/#/about" },
							{ title: "Connexion", href: "#/login" },
					  ]
					: [
							{ title: "Accueil", href: "/#/" },
							{ title: "Recherche", href: "/#/search" },
							{ title: "A propos", href: "/#/about" },
							{ title: "Déconnexion", href: "#/logout" },
					  ];
			document.querySelector("#main-menu ul").innerHTML = links
				.map(
					({ title, href }) => `
					<li class="nav-item">
						<a class="nav-link" href="${href}">${title}</a>
					</li>
				`
				)
				.join("");
		},
	},

	firebase: {
		login: () => {
			const provider = new firebase.auth.GithubAuthProvider();
			firebase
				.auth()
				.signInWithPopup(provider)
				.then((result) => {
					app.dom.checkLoginState(result.user);
					app.mvc.router.navigateTo("/#/");
				})
				.catch((error) => {
					console.error(error);
				});
		},
		logout: () => {
			firebase
			.auth()
			.signOut()
			.then(() => {
			// app.dom.checkLoginState();
			app.mvc.router.navigateTo("/#/");	
			})
			.catch((error) => {
					console.error(error);
				});
		},
	},

	// ----------------------------------------------------------------------------------------------------------------
	// ARCHITECTURE MVC DE L'APPLICATION
	// ----------------------------------------------------------------------------------------------------------------
	mvc: {
		router: null,
		/* Méthode déclenchée au changement de route. 
			 Prend en entrée une instance de la classe contrôleur correspondante
		*/
		dispatchRoute: (controllerInstance) => {
			// récupérer les contenus de la vue partielle
			fetch(controllerInstance.viewPath)
				.then((responseHTTP) => responseHTTP.text())
				.then((htmlString) => {
					// ajouter ce contenu HTML au DOM de la page principale (dans la balise main)
					document.querySelector("main").innerHTML = htmlString;
					// déclencher le traitement spécifique
					controllerInstance.executeAfterDomUpdate();
				});
		},
	},
};

// L'application est exportée afin d'être accessible par d'autres modules.
export default app;