let app = {
	// ----------------------------------------------------------------------------------------------------------------
	// MANIPULATION DU DOM DE L'APPLICATION
	// ----------------------------------------------------------------------------------------------------------------
	dom: {},

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

export const lorem = "Hello world";

// L'application est exportée afin d'être accessible par d'autres modules.
export default app;


// let app = {
// 	// ----------------------------------------------------------------------------------------------------------------
// 	// MANIPULATION DU DOM DE L'APPLICATION
// 	// ----------------------------------------------------------------------------------------------------------------
// 	dom: {},

// 	// ----------------------------------------------------------------------------------------------------------------
// 	// ARCHITECTURE MVC DE L'APPLICATION
// 	// ----------------------------------------------------------------------------------------------------------------
// 	mvc: {
//         router: null,
//         dispatchRoute: (controllerInstnce) => {
//             fetch(controllerInstnce.viewPath)
//                 .then((responseHTTP) => responseHTTP.text())  
//                 .then((htmlString) => {
//                     document.querySelector('main').innerHTML = htmlString;
//                     controllerInstance.controllerAfterDomUptade();
//                 )};
//          },       
// 	},
// };

// export const lorem = "Hello world";

// // L'application est exportée afin d'être accessible par d'autres modules.
// export default app;

